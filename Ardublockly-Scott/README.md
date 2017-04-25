# Ardublockly-Scott
Ardublockly-Scott est un editeur de programmation visuel pour Arduino modifié par la Machinerie pour le robot Scott. Il est basé sur la librairie de Google: [Blockly][1], modifié pour générer des codes [Arduino][15].

Le paquet Python `ArdublocklyServer` est un serveur local pour pouvoir compiler et charger les code Arduino grâce à l'[IDE Arduino][2].

Tout ceci et conditionné dans une application exécutable bureau pour Windows, Mac OS X, and Linux.

![Ardublockly desktop program screenshot](https://camo.githubusercontent.com/ac2ae3998fc8c77e55effe4c9cbd84031c473fbe/687474703a2f2f6361726c6f737065726174652e6769746875622e696f2f61726475626c6f636b6c792f696d616765732f73637265656e73686f745f6465736b746f705f312e706e67)


## Caractéristique
* Génére un code Arduino grace à une interface de programmation visuel de type drag-and-drop.
* Téléverse le code directemment dans la carte arduino
* Gestion des erreurs de programmation via message sur les blocs
* Compatibleavec une large gamme de carte arduino
* Fonctionne sous Windows / Linux / Mac OS X

Ardublockly est encore en developpement et certaines fonctions ne sont pas encore implémentées. Une to-do liste peut être consultée si besoin [TODO.md][3].

Actuellement tester sous Windows avec Python 2.7 et 3.4 et sous Linux et MacOS X avec Python 2.7.


## Cloner le repository Github
Veuillez noter que certains sous-modules dans le repository gitHub ont besoin d'être initialisé. Par conséquent, pour correctement cloner le repository Ardublockly, veuillez utiliser git:

```
git clone https://github.com/carlosperate/ardublockly.git
cd ardublockly
git submodule update --init --recursive
```


## Installer
L'application est disponible pour Windows/Mac/Linux et executer tel quel. Elle peut être téléchargé depuis cette page : [Ardublockly][4].

Vous aurez besoin de l'[IDE Arduino version 1.6.x ou plus][2].

Tout les details de l'instalation peuvent être trouver sur le [Wiki github de ce projet Wiki][5].

```
python start.py
```

## Running
1. [Installer Ardublockly][5].
2. Installer l'[IDE Arduino][2] version 1.6.x ou plus (la dernière verions et toujours recommandée).
3. Executer Ardublockly comme détaillé dans la méthode d'installation.
3. Configurer Ardublockly pour localiser l'IDE Arduino : [Instructions][6].


## Online Demos
Des demos de l'interface principale d'Ardublockly peuvent être testé aux deux liens suivants (Pour téléverser du code dans l'arduino, ardublocky doit être installe completement sur votre ordinateur).

#### [Ardublockly][10]
![WebApp screenshot responsive design][web_screenshot_responsive]

#### [Ardublockly classique][11]
![WebApp screenshot][web_screenshot_classic]


## Documentation
La documentation, incluant les instructions d'installation, de configuration, et les informations pour developeur peuvent être trouver ici: [Ardublockly GitHub Wiki][7].

Pour télécharger la documentation vous pouvez cloner les données du github en utlisant Git:

```
git clone https://github.com/carlosperate/ardublockly.wiki.git
```

[1]: https://developers.google.com/blockly/
[2]: http://www.arduino.cc/en/main/software/
[3]: TODO.md
[4]: https://github.com/carlosperate/ardublockly/releases/
[5]: https://github.com/carlosperate/ardublockly/wiki/Installing-Ardublockly
[6]: https://github.com/carlosperate/ardublockly/wiki/Configure-Ardublockly
[7]: https://github.com/carlosperate/ardublockly/wiki
[8]: https://github.com/carlosperate/ardublockly/compare/blockly-original...master
[9]: https://github.com/carlosperate/ardublockly/blob/master/LICENSE
[10]: http://ardublockly.embeddedlog.com/demo/index.html
[11]: http://ardublockly.embeddedlog.com/demo/classic/index.html
[12]: http://ardublockly-builds.s3-website-us-west-2.amazonaws.com/index.html?prefix=linux/
[13]: http://ardublockly-builds.s3-website-us-west-2.amazonaws.com/index.html?prefix=windows/
[14]: http://ardublockly-builds.s3-website-us-west-2.amazonaws.com/index.html?prefix=mac/
[15]: http://www.arduino.cc
[16]: https://github.com/BlocklyDuino/BlocklyDuino
[17]: blockly/README.md

[desktop_screeshot]: http://carlosperate.github.io/ardublockly/images/screenshot_desktop_1.png
[web_screenshot_responsive]: http://carlosperate.github.io/ardublockly/images/screenshot_material_all_small.jpg
[web_screenshot_classic]: http://carlosperate.github.io/ardublockly/images/screenshot_1.png
