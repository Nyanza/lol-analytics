import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './src/router.jsx';

const app = express();

app.get('/', (req, res) => {
	res.send('ifogdkvc,meiwjfoskdlm,eowklsd49i0rweojfkdm,cx');
})

app.get('*', (req, res) => {
	match({routes: routes, location: req.url }, (err, redirect, props) => {
		const appHtml = renderToString(<RouterContext {...props}/>)
		res.send(renderPage(appHtml))
	})
})

function renderPage(appHtml) {
	return `
		<!doctype html public="storage">
		<html>
		<meta charset=utf-8/>
		<title>My First React Router App</title>
		<link rel=stylesheet href=/index.css>
		<div id=app>${appHtml}</div>
		<script src="/bundle.js"></script>
	`
};

const PORT = process.env.PORT || 8002;
app.listen(PORT, () => {
	console.log('express server at localhost', PORT);
})
