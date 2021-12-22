var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["efff0777-b0bd-4b74-b91a-aa8ca8fe0cee","3edbdfd2-aaf7-45c5-afe0-9c6b38a042e0","7be78c4b-d6f3-41ed-b804-2f3875168c10","9f0b235f-476e-457c-b729-6f316060d90c","52f03296-148d-43d4-a05a-288a16beb53f","a5eef545-c5a2-4405-9597-da02acf00394","06e4b240-d4c9-4c88-a10d-d0d48f46bc58","ed540bc5-a13b-407b-90b2-befad60fc2ee","e660a2fc-2c9a-4bdc-9d9e-21638612bfb2","234212fc-10a4-4fa0-b39b-a5933fd7df5e","9a6c1100-0c54-4010-b7e3-4013230f1af0","3bb356ae-7908-4947-bdfe-bfab2951afb3","2971c69f-d6b7-4128-8555-36086ca7a516","54abf82a-b533-41cd-b6ef-3f4879d5030c"],"propsByKey":{"efff0777-b0bd-4b74-b91a-aa8ca8fe0cee":{"name":"cricket","sourceUrl":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/efff0777-b0bd-4b74-b91a-aa8ca8fe0cee.png","frameSize":{"x":900,"y":451},"frameCount":1,"looping":true,"frameDelay":4,"version":"xUxRshRxjpCCoAP.YL6Bt_l7zemFkqwH","loadedFromSource":true,"saved":true,"sourceSize":{"x":900,"y":451},"rootRelativePath":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/efff0777-b0bd-4b74-b91a-aa8ca8fe0cee.png"},"3edbdfd2-aaf7-45c5-afe0-9c6b38a042e0":{"name":"honeybee","sourceUrl":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/3edbdfd2-aaf7-45c5-afe0-9c6b38a042e0.png","frameSize":{"x":820,"y":900},"frameCount":1,"looping":true,"frameDelay":4,"version":"gTH8N8yLaZaxllMRkj7VcFBs9L3MvSFy","loadedFromSource":true,"saved":true,"sourceSize":{"x":820,"y":900},"rootRelativePath":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/3edbdfd2-aaf7-45c5-afe0-9c6b38a042e0.png"},"7be78c4b-d6f3-41ed-b804-2f3875168c10":{"name":"floating_alien_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Dz9.cydbAADxZqnDUs9C7cNcF_F4xck5/category_characters/floating_alien.png","frameSize":{"x":239,"y":406},"frameCount":1,"looping":true,"frameDelay":2,"version":"Dz9.cydbAADxZqnDUs9C7cNcF_F4xck5","loadedFromSource":true,"saved":true,"sourceSize":{"x":239,"y":406},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Dz9.cydbAADxZqnDUs9C7cNcF_F4xck5/category_characters/floating_alien.png"},"9f0b235f-476e-457c-b729-6f316060d90c":{"name":"kid_11_1","sourceUrl":"assets/api/v1/animation-library/gamelab/zLuUEVl01I3jYuYhQVXfwnQ2dadzV8bN/category_characters/kid_11.png","frameSize":{"x":237,"y":353},"frameCount":1,"looping":true,"frameDelay":2,"version":"zLuUEVl01I3jYuYhQVXfwnQ2dadzV8bN","loadedFromSource":true,"saved":true,"sourceSize":{"x":237,"y":353},"rootRelativePath":"assets/api/v1/animation-library/gamelab/zLuUEVl01I3jYuYhQVXfwnQ2dadzV8bN/category_characters/kid_11.png"},"52f03296-148d-43d4-a05a-288a16beb53f":{"name":"pink_monster_1","sourceUrl":"assets/api/v1/animation-library/gamelab/DxGuqzBZCE_nOwNPmmU9FjNcYY37fFFp/category_characters/pink_monster.png","frameSize":{"x":242,"y":285},"frameCount":1,"looping":true,"frameDelay":2,"version":"DxGuqzBZCE_nOwNPmmU9FjNcYY37fFFp","loadedFromSource":true,"saved":true,"sourceSize":{"x":242,"y":285},"rootRelativePath":"assets/api/v1/animation-library/gamelab/DxGuqzBZCE_nOwNPmmU9FjNcYY37fFFp/category_characters/pink_monster.png"},"a5eef545-c5a2-4405-9597-da02acf00394":{"name":"mouse_gray_1","sourceUrl":"assets/api/v1/animation-library/gamelab/ZDNlc.pTAcmPf8V9XWDKdtmQbgkDMf6U/category_animals/mouse_gray.png","frameSize":{"x":300,"y":296},"frameCount":1,"looping":true,"frameDelay":2,"version":"ZDNlc.pTAcmPf8V9XWDKdtmQbgkDMf6U","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":296},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZDNlc.pTAcmPf8V9XWDKdtmQbgkDMf6U/category_animals/mouse_gray.png"},"06e4b240-d4c9-4c88-a10d-d0d48f46bc58":{"name":"pterodactyl_1","sourceUrl":"assets/api/v1/animation-library/gamelab/T82VGzsfgoMACn2kSWURSeh98Vjj_sHH/category_animals/pterodactyl.png","frameSize":{"x":300,"y":229},"frameCount":1,"looping":true,"frameDelay":2,"version":"T82VGzsfgoMACn2kSWURSeh98Vjj_sHH","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":229},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T82VGzsfgoMACn2kSWURSeh98Vjj_sHH/category_animals/pterodactyl.png"},"ed540bc5-a13b-407b-90b2-befad60fc2ee":{"name":"82515 (1).png_1","sourceUrl":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/ed540bc5-a13b-407b-90b2-befad60fc2ee.png","frameSize":{"x":391,"y":672},"frameCount":1,"looping":true,"frameDelay":4,"version":"vS4hb2gz8U.E29HYKUJedHxlq3CftHgB","loadedFromSource":true,"saved":true,"sourceSize":{"x":391,"y":672},"rootRelativePath":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/ed540bc5-a13b-407b-90b2-befad60fc2ee.png"},"e660a2fc-2c9a-4bdc-9d9e-21638612bfb2":{"name":"carrot","sourceUrl":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/e660a2fc-2c9a-4bdc-9d9e-21638612bfb2.png","frameSize":{"x":148,"y":125},"frameCount":1,"looping":true,"frameDelay":4,"version":"h51qrWI09mQQfULMuWUnDnedM__PlmZR","loadedFromSource":true,"saved":true,"sourceSize":{"x":148,"y":125},"rootRelativePath":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/e660a2fc-2c9a-4bdc-9d9e-21638612bfb2.png"},"234212fc-10a4-4fa0-b39b-a5933fd7df5e":{"name":"tomato","sourceUrl":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/234212fc-10a4-4fa0-b39b-a5933fd7df5e.png","frameSize":{"x":148,"y":125},"frameCount":1,"looping":true,"frameDelay":4,"version":"r8oHB0M2yseeI6pF_.8cCIQvnx02G0RX","loadedFromSource":true,"saved":true,"sourceSize":{"x":148,"y":125},"rootRelativePath":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/234212fc-10a4-4fa0-b39b-a5933fd7df5e.png"},"9a6c1100-0c54-4010-b7e3-4013230f1af0":{"name":"pumpkin","sourceUrl":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/9a6c1100-0c54-4010-b7e3-4013230f1af0.png","frameSize":{"x":148,"y":125},"frameCount":1,"looping":true,"frameDelay":4,"version":".uXM_jeVypoTBglGJq4rwzvASEW6Llz9","loadedFromSource":true,"saved":true,"sourceSize":{"x":148,"y":125},"rootRelativePath":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/9a6c1100-0c54-4010-b7e3-4013230f1af0.png"},"3bb356ae-7908-4947-bdfe-bfab2951afb3":{"name":"potato","sourceUrl":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/3bb356ae-7908-4947-bdfe-bfab2951afb3.png","frameSize":{"x":148,"y":125},"frameCount":1,"looping":true,"frameDelay":4,"version":"RNAG9EqB3OSoipOhhjPXgaYLp7jDWQIB","loadedFromSource":true,"saved":true,"sourceSize":{"x":148,"y":125},"rootRelativePath":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/3bb356ae-7908-4947-bdfe-bfab2951afb3.png"},"2971c69f-d6b7-4128-8555-36086ca7a516":{"name":"watermelon","sourceUrl":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/2971c69f-d6b7-4128-8555-36086ca7a516.png","frameSize":{"x":148,"y":125},"frameCount":1,"looping":true,"frameDelay":4,"version":"41ECuJomjv.sjwutqeKo4fPlzxgW9lhi","loadedFromSource":true,"saved":true,"sourceSize":{"x":148,"y":125},"rootRelativePath":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/2971c69f-d6b7-4128-8555-36086ca7a516.png"},"54abf82a-b533-41cd-b6ef-3f4879d5030c":{"name":"mushroom","sourceUrl":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/54abf82a-b533-41cd-b6ef-3f4879d5030c.png","frameSize":{"x":148,"y":125},"frameCount":1,"looping":true,"frameDelay":4,"version":"DELieIj.0FolPczUGW.5Edo0dVY3cLFr","loadedFromSource":true,"saved":true,"sourceSize":{"x":148,"y":125},"rootRelativePath":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/54abf82a-b533-41cd-b6ef-3f4879d5030c.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


for (var i = 50; i < 400; i=i+50) 
{
  var pumpkin = createSprite(i, 50, 20, 20);
  pumpkin.setAnimation("pumpkin")
  var  tomato = createSprite( i,  100, 20, 20);
  tomato.setAnimation("tomato")
  var  mushroom = createSprite( i,  150, 20, 20);
  mushroom.setAnimation("mushroom")
  var  brinjal = createSprite( i,  200, 20, 20);
  var  carrot = createSprite( i,  250, 20, 20);
  carrot.setAnimation("carrot")
  var  spinach = createSprite( i,  300, 20, 20);
  

}






function draw() {
background(" brown");
  drawSprites();

}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
