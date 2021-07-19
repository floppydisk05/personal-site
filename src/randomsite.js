//@Project: Nick Higgins' Web Site 
//@Author:  Nicholas Higgins
//@Contact: spybob888@aol.com
//@Created: 10:33 AM Sunday, January 31, 2016
//@Modified: 11:25 AM Thursday, April 09, 2020


function randInt(size) {
    return Math.ceil(Math.random()*size);
  }
      function getSite(jNum)
      {
          var mtSites = new Array();
            mtSites[1] = "<a href=\"http://www.winworldpc.com/\">WinWorld</a>";
            mtSites[2] = "<a href=\"https://irc.nick99nack.com/\">NickNet IRC</a>";
            mtSites[3] = "<a href=\"http://wiki.ninz.bz/\">NINA</a>";
            mtSites[4] = "<a href=\"https://escargot.chat/\">Escargot</a>";
            mtSites[5] = "<a href=\"http://www.nick99nack.com/\">nick99nack</a>";
            mtSites[6] = "<a href=\"https://sashi.neocities.org/\">Sashi</a>";
            mtSites[7] = "<a href=\"https://tox.dkay.xyz/\">Toxidation's website</a>";
            mtSites[8] = "<a href=\"https://cocomark.neocities.org/\">Coco's website</a>";
            mtSites[9] = "<a href=\"http://strangenessblog.net/\">Strangeness Blog</a>";
            mtSites[10] = "<a href=\"https://danika.jukor.net/\">Danielle Wheeler</a>";
            mtSites[11] = "<a href=\"https://starman0620.neocities.org/index.html\">Starman</a>";
            mtSites[12] = "<a href=\"https://chew.pw/\">Chew's Website </a>";
            mtSites[13] = "<a href=\"https://tosdr.org/\">ToS;DR </a>";
            mtSites[14] = "<a href=\"http://toastytech.com/\">ToastyTech</a>";
            mtSites[15] = "<a href=\"http://www.hoary.org/browse/\">Optimized for no one </a>";
            mtSites[16] = "<a href=\"http://www.cameronsworld.net/\">Cameron's World </a>";
                  
          return mtSites[jNum];
      }
      document.write(getSite(randInt(16)));
  