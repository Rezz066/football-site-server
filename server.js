const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();

const { PORT } = process.env || 7070;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});

/*
LaLiga club logo
https://media.api-sports.io/football/leagues/140.png
https://media.api-sports.io/flags/es.svg
Barcelona: https://media-1.api-sports.io/football/teams/529.png
Atletico: 530
Athletic: 531
Valencia: 532
Villarreal: 533
Sevilla: 536
Celta Vigo: 538
Espanyol: 540
Real Madrid: 541
Real Betis: 543
Getafe: 546
Girona: 547
Real Sociedad: 548
Valladolid: 720
Almeria: 723
Cadiz: 724
Osasuna: 727
Rayo Vallecano: 728
Elche: 797
Mallorca: 798

Bundesliga club logo
https://media-3.api-sports.io/football/leagues/78.png
https://media-2.api-sports.io/flags/de.svg
Bayern: https://media-1.api-sports.io/football/teams/157.png
Hertha: 159
Freiburg: 160
Wolfsburg: 161
Weder Bremen: 162
Monchengladbach: 163
Mainz: 164
Dortmund: 165
Hoffenheim: 167
Leverkusen: 168
Frankfurt: 169
Augsburg: 170
Stuttgart: 172
Leipzig: 173
Schalke: 174
Bochum: 176
Union Berlin: 182
Koln: 192


Serie A club logo
https://media-3.api-sports.io/football/leagues/135.png
https://media-2.api-sports.io/flags/it.svg
Lazio: https://media-1.api-sports.io/football/teams/487.png
Sassuolo: 488
AC Milan: 489
Napoli: 492
Udinese: 494
Juventus: 496
Roma: 497
Sampordia: 498
Atalanta: 499
Bologna: 500
Fiorentina: 502
Torino: 503
Verona: 504
Inter: 505
Empoli: 511
Salernitana: 514
Spezia: 515
Cremonese: 520
Lecce: 867
Monza: 1579

Ligue 1 club logo
https://media-3.api-sports.io/football/leagues/61.png
https://media-2.api-sports.io/flags/fr.svg
Angers: https://media-1.api-sports.io/football/teams/77.png
Lille: 79
Lyon: 80
Marseille: 81
Montpellier: 81
Nantes: 83
Nice: 84
PSG: 85
Monaco: 91
Reims: 93
Rennes: 94
Strasbourg: 95
Toulouse: 96
Lorient: 97
Ajaccio: 98
Clermont Foot: 99
Stad Brestois: 106
Auxerre: 108
Estac Troyes: 110
Lens: 116
*/
