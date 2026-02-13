# Official magiaotdarvo.com website

## Author's woodcarvings and eco-products by Didi Georgieva 

[magiaotdarvo.com](https://magiaotdarvo.com/)

# Getting Started

## Requirements
- PHP v8.5.1
- Node.js v20.19.6
- MySQL instance

## Setup
```
npm run generate:data
npm run generate:sql
mysql <repo>/scripts/categories.sql
mysql <repo>/scripts/products.sql
```

## How to Use

```
npm i
npm run php
npm run dev
```

# Image guideliness

## To update cover images

```shell
mogrify -geometry x600 cover.jpg
```
