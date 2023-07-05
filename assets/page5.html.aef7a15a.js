import{_ as s,r as o,o as r,c as h,b as e,d as t,e as a,w as u,a as i}from"./app.f88ccf77.js";const c={},d=i('<h1 id="installing-games" tabindex="-1"><a class="header-anchor" href="#installing-games" aria-hidden="true">#</a> Installing Games</h1><p>PSP games generally come in 2 formats, <strong>&quot;.iso&quot;</strong> or <strong>&quot;.cso&quot;</strong> though you&#39;ll mostly see games in the ISO format.</p><p>These don&#39;t need an &quot;installation&quot; so to speak. Simply follow these steps.</p><ol><li>Make a folder called <em>ISO</em> in the root of your PSP.</li><li>Copy the .iso files of your games into that <em>ISO</em> folder in your PSP</li><li>Done! They should show up beneath <code>Game Menu &gt; Memory Stick</code></li></ol><h2 id="installing-ps1-games" tabindex="-1"><a class="header-anchor" href="#installing-ps1-games" aria-hidden="true">#</a> Installing PS1 Games</h2><p>This guide will focus on converting PS1 &quot;<strong>.bin, .cue</strong>&quot; files to an EBOOT that can be launched by PSP.</p><p>You also have the option to directly get PSN EBOOTs but these are legally in a gray area. If you have no issue with that, skip to <strong>Step 8</strong>.</p><h3 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites:</h3>',8),m={href:"https://mega.nz/file/d65lRbba#fR30KaD-wLaaTfx2Bw3u9Jpk3ACgwpsPq4-GtZ3IR2E",target:"_blank",rel:"noopener noreferrer"},g=e("li",null,[t('A PS1 game that has been ripped to "'),e("strong",null,".bin, .cue"),t('" format.')],-1),p=i('<h3 id="steps" tabindex="-1"><a class="header-anchor" href="#steps" aria-hidden="true">#</a> Steps:</h3><ol><li>Download and extract PSX2PSP from the above link and open it.</li><li>Select &quot;Theme Mode&quot; as we will have a live preview of the game icons and images. If you have a severely underpowered PC, use &quot;Classic Mode&quot;</li><li>(OPTIONAL, RECOMMENDED) <ul><li>Go on google and download the CD cover and a screenshot from the game.</li><li>Go to &quot;Customize PBP&quot;</li><li>Click on the &quot;...&quot; under icon image and select the CD cover. Do the same for the background image except select the screenshot this time.</li><li>This is the most basic customization. We won&#39;t be going too in depth here as more complex customization such as boot animations and intro sounds take a lot of time to make with little to show for it.</li></ul></li><li>Go to &quot;Convert Menu&quot;</li><li>Select the &quot;...&quot; under &quot;ISO/PBP File:&quot; and select your .bin file that contains your PS1 game. Note that for multi-disc games, you can select the drop-down menu and select &quot;ISO/PBP File 2&quot; and select Disc 2 of the game.</li><li>If the game title is not automatically filled, Select &quot;...&quot; under &quot;Game Title&quot;. Search and select the name of the PS1 game you are converting</li><li>Finally, set the &quot;Output PBP&quot; path and click on &quot;Convert&quot;.</li><li>Once you have your EBOOT folder at hand (usually a folder named the game ID and inside the EBOOT file), Connect your PSP to your PC.</li><li>Copy the converted Game folder to <code>PSP\\GAME</code> folder inside your PSP.</li><li>Done! The game should show up beneath <code>Game Menu &gt; Memory Stick</code></li></ol><h2 id="want-to-install-more-homebrew" tabindex="-1"><a class="header-anchor" href="#want-to-install-more-homebrew" aria-hidden="true">#</a> Want to install more Homebrew?</h2>',3),f={class:"custom-container tip"},P=e("p",{class:"custom-container-title"},"TIP",-1);function q(S,y){const n=o("ExternalLinkIcon"),l=o("RouterLink");return r(),h("div",null,[d,e("ul",null,[e("li",null,[e("a",m,[t("PSX2PSP"),a(n)])]),g]),p,e("div",f,[P,e("p",null,[a(l,{to:"/page6.html"},{default:u(()=>[t("Keep reading!")]),_:1})])])])}var b=s(c,[["render",q],["__file","page5.html.vue"]]);export{b as default};