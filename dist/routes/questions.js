"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)(); //This allow us to register middleware
router.post('/');
router.get('/');
router.patch('/:id');
