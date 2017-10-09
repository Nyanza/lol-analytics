import requests
import json
url = 'https://raw.githubusercontent.com/Nyanza/lol-analytics/master/scraping/champions.json';
g = requests.get(url)
host = "http://localhost:8000"
path = 'http://ddragon.leagueoflegends.com/cdn/img/champion'
square_path = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion'

from os import listdir
from os.path import isfile, join
json_path = './scraping/champstats/'
json_files = [f for f in listdir(json_path) if isfile(join(json_path, f))]

def load_json(path, file):
    with open(path+file) as data_file:
        return json.load(data_file)

import operator
sorted_champ = sorted(g.json().items(), key=operator.itemgetter(0))

average = {}
def insert_to_db(name, info, counter):
    key = info['key'] #get champ key
    name = info['name'] #get champ name
    headers = {'Content-type': 'application/json', 'Accept': 'text/plain'} #set headers
    info['metrics'] = {} #init metrics
    metrics = load_json(json_path, json_files[counter])
    for league in metrics:
        for lane in metrics[league]:
            if 'http' not in lane:
                for x in metrics[league][lane]["build"]:
                    x["img"] = x["src"]
                    x.pop('src', None)
                if "counters" in metrics[league][lane]:
                    for z in metrics[league][lane]["counters"]:
                        for weak_strong in metrics[league][lane]["counters"][z]:
                            #print(weak_strong)
                            weak_strong["win_rate"] = float(weak_strong["win_rate"].replace("%", ""))
                metrics[league][lane]["radar_chart"] = {}
                for y in list(metrics[league][lane]["stats"]):
                    new_key = y.replace(" ", "_").lower()
                    str_num = str(round(float(metrics[league][lane]["stats"][y].replace("%", "")), 2))
                    if str_num[-1] == "0":
                        str_num = int(str_num[0:len(str_num)-2])
                    else:
                        str_num = round(float(metrics[league][lane]["stats"][y].replace("%", "")), 2)
                    metrics[league][lane]["stats"][new_key] = str_num
                    z = metrics[league][lane]["stats"].pop(y, None)
                    metrics[league][lane]["radar_chart"][new_key] = round((float(z.replace("%", "")) / average[league][lane][new_key]["total"]) * 10, 5)
    #print(json.dumps(metrics))
    skill_images = metrics.pop('skillImages', None)
    info['metrics'] = metrics
    default_metrics = {}
    for lane in metrics["platplus"]:
        default_lane = lane
        break
    default_metrics['win_rate'] = metrics["platplus"][default_lane]["stats"]['win_rate']
    default_metrics['play_rate'] = metrics["platplus"][default_lane]["stats"]['pick_rate']
    default_metrics['ban_rate'] = metrics["platplus"][default_lane]["stats"]['ban_rate']
    info['defaultMetrics'] = default_metrics
    info['squareImg'] = square_path + '/' + key + '.png'
    skins = info['skins']
    for skin in skins:
        ext = key + '_' + str(skin['num'])  + '.jpg'
        skin['loading'] = path + '/loading/' + ext
        skin['splash'] = path + '/splash/' + ext
    info['skins'] = skins
    counter = 0
    spells = {'q': {}, 'w': {}, 'e': {}, 'r': {}}
    for spell in info['spells']:
        skill = 'qwer'[counter]
        spells[skill]['img'] = skill_images[counter]
        spells[skill]['description'] = spell['description']
        spells[skill]['name'] = spell['name']
        counter += 1
    info['spells'] = spells
    p = requests.post(host+"/api/v1/champions/", data=json.dumps(info), headers=headers)
    print(name)
    print(p)

def get_average():
    key = info['key'] #get champ key
    name = info['name'] #get champ name
    headers = {'Content-type': 'application/json', 'Accept': 'text/plain'} #set headers
    info['metrics'] = {} #init metrics
    metrics = load_json(json_path, json_files[counter])
    for league in metrics:
        for lane in metrics[league]:
            if 'http' not in lane:
                for y in list(metrics[league][lane]["stats"]):
                    new_key = y.replace(" ", "_").lower()
                    metrics[league][lane]["stats"][new_key] = metrics[league][lane]["stats"][y]
                    z = metrics[league][lane]["stats"].pop(y, None)
                    if league not in average:
                        average[league] = {}
                    if lane not in average[league]:
                        average[league][lane] = {}
                    if new_key not in average[league][lane]:
                        average[league][lane][new_key] = {}
                        average[league][lane][new_key]["average"] = float(z.replace("%",""))
                        average[league][lane][new_key]["total"] = float(z.replace("%",""))
                    else:
                        average[league][lane][new_key]["average"] = (average[league][lane][new_key]["average"] + float(z.replace("%","")))/2
                        average[league][lane][new_key]["total"] += float(z.replace("%", ""))
counter = 0
for name, info in sorted_champ:
    get_average()
    counter += 1
counter = 0
for name, info in sorted_champ:
    insert_to_db(name, info, counter)
    counter += 1
    if counter < 1:
        break
