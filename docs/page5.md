# Installing Games

PSP games generally come in 2 formats, **".iso"** or **".cso"** though you'll mostly see games in the ISO format.

These don't need an "installation" so to speak. Simply follow these steps.
1. Make a folder called *ISO* in the root of your PSP.
2. Copy the .iso files of your games into that *ISO* folder in your PSP
3. Done! They should show up beneath `Game Menu > Memory Stick`

## Installing PS1 Games
This guide will focus on converting PS1 "**.bin, .cue**" files to an EBOOT that can be launched by PSP.

You also have the option to directly get PSN EBOOTs but these are legally in a gray area. If you have no issue with that, skip to **Step 8**.

### Prerequisites:
- [PSX2PSP](https://mega.nz/file/d65lRbba#fR30KaD-wLaaTfx2Bw3u9Jpk3ACgwpsPq4-GtZ3IR2E)
- A PS1 game that has been ripped to "**.bin, .cue**" format.

### Steps:
1. Download and extract PSX2PSP from the above link and open it.
2. Select "Theme Mode" as we will have a live preview of the game icons and images. If you have a severely underpowered PC, use "Classic Mode"
3. (OPTIONAL, RECOMMENDED) 
   - Go on google and download the CD cover and a screenshot from the game.
   - Go to "Customize PBP"
   - Click on the "..." under icon image and select the CD cover. Do the same for the background image except select the screenshot this time.
   - This is the most basic customization. We won't be going too in depth here as more complex customization such as boot animations and intro sounds take a lot of time to make with little to show for it.
4. Go to "Convert Menu" 
5. Select the "..." under "ISO/PBP File:" and select your .bin file that contains your PS1 game. Note that for multi-disc games, you can select the drop-down menu and select "ISO/PBP File 2" and select Disc 2 of the game.
6. If the game title is not automatically filled, Select "..." under "Game Title". Search and select the name of the PS1 game you are converting
7. Finally, set the "Output PBP" path and click on "Convert".
8. Once you have your EBOOT folder at hand (usually a folder named the game ID and inside the EBOOT file), Connect your PSP to your PC.
9. Copy the converted Game folder to `PSP\GAME` folder inside your PSP. 
10. Done! The game should show up beneath `Game Menu > Memory Stick`

## Want to install more Homebrew?
::: tip
[Keep reading!](/page6.md)
:::