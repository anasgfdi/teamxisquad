/* Un bloc de commentaire
*/

--une ligne de commentaire

/* Creation de la table Personnes */
CREATE TABLE Personnes(Id_personne int PRIMARY KEY NOT NULL, prenom varchar(20), age int, metier varchar(20) );

/* Creation de 5 personnes */
INSERT INTO Personnes VALUES(1,'Tom', 28 , 'Cuisinier'),(2,'Lucy', 18 , 'Etudiante'),
(3,'Frank', 31 , 'Cariste'),(4,'Jane',  21 , 'Musicienne' ),(5,'Robert', 54 , 'Chauffeur');

SELECT*FROM Personnes;
SELECT prenom, age FROM Personnes;
SELECT age, metier FROM Personnes;
SELECT prenom, age, metier FROM Personnes;
SELECT*FROM Personnes WHERE prenom ='Lucy';
SELECT prenom, age FROM Personnes WHERE metier ='Chauffeur';
SELECT*FROM Personnes WHERE age > 20;
SELECT*FROM Personnes WHERE age > 40;
SELECT*FROM Personnes WHERE metier != 'Cuisinier';
SELECT*FROM Personnes WHERE age >20 AND metier = 'Musicienne'; 
SELECT*FROM Personnes WHERE metier = 'Cuisinier' OR metier = 'Chauffeur';
SELECT*FROM Personnes WHERE NOT metier = 'Cariste';
SELECT*FROM Personnes WHERE prenom LIKE '%a%';
SELECT*FROM Personnes WHERE metier LIKE '%e%' AND metier LIKE '%r%';
SELECT*FROM Personnes WHERE metier LIKE '_________';
SELECT*FROM Personnes WHERE length(metier)= 9;
SELECT*FROM Personnes WHERE metier IN ('Cariste','Cuisinier','Etudiante');
SELECT*FROM Personnes WHERE age BETWEEN 20 AND 40;
SELECT*FROM Personnes WHERE NOT age BETWEEN 20 AND 40;
SELECT*FROM Personnes WHERE NOT metier IN ('Cariste','Cuisinier','Etudiante');
SELECT*FROM Personnes ORDER BY age;
SELECT*FROM Personnes ORDER BY prenom DESC;
SELECT*FROM Personnes WHERE length(metier) >=9 ORDER BY metier ;
SELECT COUNT(*) FROM Personnes WHERE age BETWEEN 20 AND 40; 
SELECT AVG(age) FROM Personnes;
SELECT MIN(age) FROM Personnes;
SELECT MAX(age) FROM Personnes;
SELECT MAX(age) - MIN(age) FROM Personnes; 
SELECT prenom, age+10 FROM Personnes;

CREATE TABLE Voitures(Id_voiture int PRIMARY KEY NOT NULL, marque varchar(20), modele varchar(20), couleur varchar(20), immatriculation DATE, prix FLOAT);

INSERT INTO Voitures VALUES(1,'Bugatti', 'Chiron' , 'Noire','2022-06-13', 2600000),(2,'Lamborghini', 'Urus', 'Noire', '2022-06-06', 300000),
(3, 'Audi', 'R8', 'Rouge', '2020-12-24', 150850.99),(4,'Peugeot', '304', 'Marron', '1979-01-25', 750.90);

SELECT*FROM Voitures;

--prix de la voiture la moin chere
SELECT MIN(prix) FROM Voitures;
--prix voiture plus chere 
SELECT MAX(prix) FROM Voitures;
--difference entre les 2 
SELECT MAX(prix)- MIN(prix)FROM Voitures;
--selectionner de facon distinct les couleur dispo
SELECT Distinct couleur FROM Voitures;
--trier par date d'immatriculation par ordre croissant 
SELECT*FROM Voitures ORDER BY immatriculation;
--Afficher toute les marques qui ont 2 voyelles identique dans leurs nom 
SELECT*FROM Voitures WHERE marque LIKE '%a%a%' OR marque LIKE '%e%e%' OR marque LIKE '%i%i%' OR marque LIKE '%o%o%' OR marque LIKE '%u%u%' OR marque LIKE '%y%y%';

ALTER TABLE Personnes add column id_cars int;
UPDATE Personnes SET id_cars='1'WHERE prenom = 'Tom';
UPDATE Personnes SET id_cars='3'WHERE prenom = 'Frank';
UPDATE Personnes SET id_cars='2'WHERE prenom = 'Jane';
UPDATE Personnes SET id_cars='4'WHERE prenom = 'Robert';
SELECT*FROM Personnes ORDER BY id_personne;

SELECT*FROM Personnes WHERE id_cars IS NULL;

SELECT*FROM Personnes WHERE id_cars IS NOT NULL;
SELECT*FROM Personnes,Voitures WHERE id_cars = id_voiture;
CREATE VIEW proprietaire AS SELECT Personnes.id_personne,prenom,age,metier,Voitures.*FROM Personnes,Voitures WHERE id_cars = id_voiture; 
SELECT*FROM proprietaire;
--30 Affichez le propriétaire de la Peugeot 
SELECT*FROM proprietaire WHERE marque ='Peugeot';
--31 Afficher la voiture de Tom
SELECT*FROM proprietaire WHERE prenom ='Tom';

-- 32 affichez les personnes qui ont une voiture moins chère que Jane
SELECT*FROM proprietaire WHERE prix < 300000;

-- 33 afficher les propriétaire ayant une voiture de moins de 10 ans d'ancienneté
SELECT*FROM proprietaire WHERE immatriculation >= '2012-01-01';

--34 comptez le nombre de voiture ayant la couleur noire 
SELECT COUNT(*) FROM proprietaire WHERE couleur ='Noire';

-- 35 moyenne des prix des voitures de couleur noire
SELECT AVG(prix) FROM proprietaire WHERE couleur='Noire' ;
DELETE FROM Voitures WHERE marque = 'Peugeot';
SELECT*FROM Voitures;
SELECT*FROM proprietaire;
SELECT*FROM Personnes;

--CREATION D'UNE TABLE THEME Jeu de Rôle !

CREATE TABLE Classes (Id_classe int PRIMARY KEY NOT NULL, nom_class varchar(20));

INSERT INTO Classes VALUES(1,'Chevalier'),(2,'Mage'),(3,'Voleur'),(4,'Chasseur');

CREATE TABLE Races (Id_race int PRIMARY KEY NOT NULL, nom_races varchar(20));

INSERT INTO Races VALUES(1,'Humain'),(2,'Elfe'),(3,'Nain'),(4,'Orc');

CREATE TABLE Animaux (Id_animal int PRIMARY KEY NOT NULL,nom_animaux varchar(20));

INSERT INTO Animaux VALUES(1,'Dragon'),(2,'Griffon'),(3,'Ours'),(4,'Loup'),(5,'Chat'),(6,'Chien');

CREATE TABLE Personnages (Id_Personnage int PRIMARY KEY NOT NULL, nom varchar(20));
ALTER TABLE Personnages add column id_class int;
ALTER TABLE Personnages add column id_races int;
ALTER TABLE Personnages add column id_animaux int;

INSERT INTO Personnages VALUES(1,'Jojo',4,1,1);



CREATE VIEW Perso1 AS SELECT Classes.id_classe,nom_class,Races.id_race,nom_races,Animaux.id_animal,nom_animaux,Personnages.*FROM Classes,Animaux,Races,Personnages WHERE Personnages.id_class = Classes.id_classe;

SELECT*FROM Perso1;
