from PIL import Image
import os

def compressImages(imgDirectory, fileType, outputQuality):
	for filename in os.listdir(imgDirectory):
		print('optimizing: ', filename)
		imagePath = imgDirectory + '/' + filename
		image = Image.open(imagePath)
		image.save(imagePath, format=fileType, optimize=True, quality=outputQuality)

outputQuality = 70
splashDirectory = './assets/splash'
loadingDirectory = './assets/loading'
squareDirectory = './assets/square'

compressImages(splashDirectory, 'JPEG', outputQuality)
compressImages(loadingDirectory, 'JPEG', outputQuality)
compressImages(squareDirectory, 'PNG', outputQuality)