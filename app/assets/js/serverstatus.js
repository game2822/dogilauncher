/**
 * Mojang
 * 
 * This module serves as a minimal wrapper for Mojang's REST api.
 * 
 * @module mojang
 */
// Requirements
const request = require('request')
const logger  = require('./loggerutil')('%c[Mojang]', 'color: #a02d2a; font-weight: bold')

// Constants
const minecraftAgent = {
    name: 'Minecraft',
    version: 1
}
const authpath = 'https://authserver.mojang.com'
const statuses = [
    {
        service: 'session.minecraft.net',
        status: 'grey',
        name: 'Service des sessions multijoueur',
        essential: true
    },
    {
        service: 'authserver.mojang.com',
        status: 'grey',
        name: 'Service d\'authentification',
        essential: true
    },
    {
        service: 'textures.minecraft.net',
        status: 'grey',
        name: 'Skins Minecraft',
        essential: false
    },
    {
        service: 'api.mojang.com',
        status: 'grey',
        name: 'API Publique',
        essential: false
    },
    {
        service: 'minecraft.net',
        status: 'grey',
        name: 'Minecraft.net',
        essential: false
    },
    {
        service: 'account.mojang.com',
        status: 'grey',
        name: 'Site des comptes Mojang',
        essential: false
    }
]

// Pas besoin de modifier la suite du fichier