function bounceoff(a1,b2){
    if (a1.x - b2.x < b2.width/2 + a1.width/2
    && b2.x - a1.x < b2.width/2 + a1.width/2 &&
    a1.y - b2.y < b2.height/2 + a1.height/2
    && b2.y - a1.y < b2.height/2 + a1.height/2) {
        a1.velocityX = a1.velocityX * (-1);
        b2.velocityX = b2.velocityX * (-1);
        a1.velocityY = a1.velocityY * (-1);
        b2.velocityY = b2.velocityY * (-1);
    }
  }

  function isTouching(a1,b2){
    if (a1.x - b2.x < b2.width/2 + a1.width/2
    && b2.x - a1.x < b2.width/2 + a1.width/2 &&
    a1.y - b2.y < b2.height/2 + a1.height/2
    && b2.y - a1.y < b2.height/2 + a1.height/2) {
        return true;
    }
    else{
        return false;
    }
  }

  