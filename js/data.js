/**
 * Data
 */

 const bars = Object.freeze([
  {
    name: "Omnipollos Hatt",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.891807118673!2d18.07007635114135!3d59.31806358156481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77fb3a1d0aa3%3A0x68dccf862635838d!2sOmnipollos%20hatt!5e0!3m2!1sen!2sse!4v1625926931464!5m2!1sen!2sse",
    website: "http://www.omnipolloshatt.com",
    tags: ["öl", "pizza"],
  },
  {
    name: "Stigbergets Fot",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.8284279155441!2d18.06875385114142!3d59.319121881565245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f779ab0c1c33d%3A0xd228b2d37b2941e4!2sStigbergets%20Fot!5e0!3m2!1sen!2sse!4v1625929392138!5m2!1sen!2sse",
    website: "https://stigbergetsfot.se",
    tags: ["öl"],
  },
  {
    name: "Akkurat",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.787152906556!2d18.066363551141468!3d59.31981108156547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77c4f54ec883%3A0x890237179d4ab558!2sAkkurat%20-%20Restaurang%20S%C3%B6dermalm!5e0!3m2!1sen!2sse!4v1625929814379!5m2!1sen!2sse",
    website: "https://akkurat.se",
    tags: ["öl", "whiskey", "live music"],
  },
  {
    name: "Tjoget Cocktail Bar",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.9997591730876!2d18.032667951141224!3d59.31626098156422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77c4584b90ad%3A0xabc90af8981aaef8!2sTjoget!5e0!3m2!1sen!2sse!4v1625930197697!5m2!1sen!2sse",
    website: "https://tjoget.com/baren",
    tags: ["vin"],
  },
  {
    name: "Vinverket",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.0980925456004!2d18.043932551143016!3d59.348010381575385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d73d17dc1ed%3A0x628401b17a0abefb!2sVinverket%20Stockholm!5e0!3m2!1sen!2sse!4v1626443503820!5m2!1sen!2sse",
    website: "https://vinverket.se",
    tags: ["vin"],
  },
  {
    name: "Vikingagatan 5",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.5314002730863!2d18.030372951142592!3d59.34077698157285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d79a66ae743%3A0xc7addca4f2af57ca!2sVikingagatan%205%2C%20113%2042%20Stockholm!5e0!3m2!1sen!2sse!4v1626443450664!5m2!1sen!2sse",
    website: "http://www.facebook.com/Vikingagatan5",
    tags: ["vin"],
  },
  {
    name: "Amfora Vinbaren",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.5505447610622!2d18.06311525114259!3d59.34045738157272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d378da1a927%3A0x2baf33f67639d924!2sAmfora%20Vinbaren!5e0!3m2!1sen!2sse!4v1626443411330!5m2!1sen!2sse",
    website: "https://vinbaren111.se",
    tags: ["vin"],
  },
  {
    name: "Cork Vinbar",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.5096588603653!2d18.06653655114169!3d59.3244444815671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77abf900b10f%3A0x2d6c9cff3fb20d62!2sCork%20Vinbar!5e0!3m2!1sen!2sse!4v1626251307461!5m2!1sen!2sse",
    website: "https://www.corkvinbar.se",
    tags: ["vin"],
  },
  {
    name: "Dryck vinbar", 
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.929350419959!2d18.0613440511413!3d59.31743668156461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77e5ba2d66bd%3A0x97a90f4d48f1c8b7!2sDryck%20Wine%20Bar!5e0!3m2!1sen!2sse!4v1626251255787!5m2!1sen!2sse", 
    website: "https://www.dryckvinbar.se", 
    tags: ["vin"],
  },
  {
    name: "Socialen Bar",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2036.8368192349803!2d18.079358551140487!3d59.302282481559274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f799fd15027c3%3A0x818ec69f7c8186ce!2sSocialen%20Bar!5e0!3m2!1sen!2sse!4v1626443371952!5m2!1sen!2sse",
    website: "https://socialenbar.se",
    tags: ["öl"]
  }



])



