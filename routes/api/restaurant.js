const db = require("../../models")
const express = require("express");
const app = express()
const axios = require("axios");
const appRoot = require('app-root-path');
const Sequelize = require("Sequelize")
const Op = Sequelize.Op;