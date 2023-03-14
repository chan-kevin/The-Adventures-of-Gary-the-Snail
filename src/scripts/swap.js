export default class Swap{
    constructor(game){
        this.game = game;
        this.topLeft = [];
        this.topMid = [];
        this.topRight = [];
        this.botLeft = [];
        this.botMid = [];
        this.botRight = [];
        this.selectFrame = 0;
        this.box1 = {};
        this.box2 = {};
        this.box1Frame = "";
        this.box2Frame = "";
        this.x = this.game.canvas.width/3;
        this.y = this.game.canvas.height/2;
        this.click();
        this.checkStatus();
    }

    // checkStatus(){
    //     if (this.selectFrame === 2) this.selectFrame = 0;
    //     requestAnimationFrame(this.checkStatus.bind(this));
    // }
    checkStatus(){
        // console.log(this.game.pause)
        const frameWidth = this.game.width/3;
        const frameHeight = this.game.height/2;

        if (this.selectFrame === 2) {
        //     this.selectFrame = 0;
        // }
            for (const obj in this.box1){
                if (this.box1Frame === "topLeft"){
                    // this.game.gary.x += 100;
                    // console.log(this.game.gary.x)
                    // console.log(this.game.gary.x)
                    // console.log(obj)
                    // console.log(this.box1)
                    // console.log("hi")
                    if (obj === "gary"){
                        if (this.box2Frame === "topMid"){
                            this.game.gary.x += frameWidth;
                        }
                        if (this.box2Frame === "topRight"){
                            this.game.gary.x += (2 * frameWidth);
                        }
                        if (this.box2Frame === "botLeft"){
                            this.game.gary.y += frameHeight;
                        }
                        if (this.box2Frame === "botMid"){
                            this.game.gary.x += frameWidth;
                            this.game.gary.y += frameHeight;
                        }
                        if (this.box2Frame === "botRight"){
                            this.game.gary.x += (2 * frameWidth);
                            this.game.gary.y += frameHeight;
                        }
                    }

                    if (obj === "rock"){
                        if (this.box2Frame === "topMid"){
                            this.game.rock.x += frameWidth;
                        }
                        if (this.box2Frame === "topRight"){
                            this.game.rock.x += (2 * frameWidth);
                        }
                        if (this.box2Frame === "botLeft"){
                            this.game.rock.y += frameHeight;
                        }
                        if (this.box2Frame === "botMid"){
                            this.game.rock.x += frameWidth;
                            this.game.rock.y += frameHeight;
                        }
                        if (this.box2Frame === "botRight"){
                            this.game.rock.x += (2 * frameWidth);
                            this.game.rock.y += frameHeight;
                        }
                    }

                    if (obj === "jellyfish"){
                        if (this.box2Frame === "topMid"){
                            this.game.jellyfish.x += frameWidth;
                        }
                        if (this.box2Frame === "topRight"){
                            this.game.jellyfish.x += (2 * frameWidth);
                        }
                        if (this.box2Frame === "botLeft"){
                            this.game.jellyfish.y += frameHeight;
                        }
                        if (this.box2Frame === "botMid"){
                            this.game.jellyfish.x += frameWidth;
                            this.game.jellyfish.y += frameHeight;
                        }
                        if (this.box2Frame === "botRight"){
                            this.game.jellyfish.x += (2 * frameWidth);
                            this.game.jellyfish.y += frameHeight;
                        }
                    }
                }

                if (this.box1Frame === "topMid"){
                    if (obj === "gary"){
                        if (this.box2Frame === "topLeft"){
                            this.game.gary.x -= frameWidth;
                        }
                        if (this.box2Frame === "topRight"){
                            this.game.gary.x += frameWidth;
                        }
                        if (this.box2Frame === "botLeft"){
                            this.game.gary.x -= frameWidth;
                            this.game.gary.y += frameHeight;
                        }
                        if (this.box2Frame === "botMid"){
                            this.game.gary.y += frameHeight;
                        }
                        if (this.box2Frame === "botRight"){
                            this.game.gary.x += frameWidth;
                            this.game.gary.y += frameHeight;
                        }
                    }

                    if (obj === "rock"){
                        if (this.box2Frame === "topLeft"){
                            this.game.rock.x -= frameWidth;
                        }
                        if (this.box2Frame === "topRight"){
                            this.game.rock.x += frameWidth;
                        }
                        if (this.box2Frame === "botLeft"){
                            this.game.rock.x -= frameWidth;
                            this.game.rock.y += frameHeight;
                        }
                        if (this.box2Frame === "botMid"){
                            this.game.rock.y += frameHeight;
                        }
                        if (this.box2Frame === "botRight"){
                            this.game.rock.x += frameWidth;
                            this.game.rock.y += frameHeight;
                        }
                    }

                    if (obj === "jellyfish"){
                        if (this.box2Frame === "topLeft"){
                            this.game.jellyfish.x -= frameWidth;
                        }
                        if (this.box2Frame === "topRight"){
                            this.game.jellyfish.x += frameWidth;
                        }
                        if (this.box2Frame === "botLeft"){
                            this.game.jellyfish.x -= frameWidth;
                            this.game.jellyfish.y += frameHeight;
                        }
                        if (this.box2Frame === "botMid"){
                            this.game.jellyfish.y += frameHeight;
                        }
                        if (this.box2Frame === "botRight"){
                            this.game.jellyfish.x += frameWidth;
                            this.game.jellyfish.y += frameHeight;
                        }
                    }
                }

                if (this.box1Frame === "topRight"){
                    if (obj === "gary"){
                        if (this.box2Frame === "topLeft"){
                            this.game.gary.x -= (2 * frameWidth);
                        }
                        if (this.box2Frame === "topMid"){
                            this.game.gary.x -= frameWidth;
                        }
                        if (this.box2Frame === "botLeft"){
                            this.game.gary.x -= (2 * frameWidth);
                            this.game.gary.y += frameHeight;
                        }
                        if (this.box2Frame === "botMid"){
                            this.game.gary.x -= frameWidth;
                            this.game.gary.y += frameHeight;
                        }
                        if (this.box2Frame === "botRight"){
                            this.game.gary.y += frameHeight;
                        }
                    }

                    if (obj === "rock"){
                        if (this.box2Frame === "topLeft"){
                            this.game.rock.x -= (2 * frameWidth);
                        }
                        if (this.box2Frame === "topMid"){
                            this.game.rock.x -= frameWidth;
                        }
                        if (this.box2Frame === "botLeft"){
                            this.game.rock.x -= (2 * frameWidth);
                            this.game.rock.y += frameHeight;
                        }
                        if (this.box2Frame === "botMid"){
                            this.game.rock.x -= frameWidth;
                            this.game.rock.y += frameHeight;
                        }
                        if (this.box2Frame === "botRight"){
                            this.game.rock.y += frameHeight;
                        }
                    }

                    if (obj === "jellyfish"){
                        if (this.box2Frame === "topLeft"){
                            this.game.jellyfish.x -= (2 * frameWidth);
                        }
                        if (this.box2Frame === "topMid"){
                            this.game.jellyfish.x -= frameWidth;
                        }
                        if (this.box2Frame === "botLeft"){
                            this.game.jellyfish.x -= (2 * frameWidth);
                            this.game.jellyfish.y += frameHeight;
                        }
                        if (this.box2Frame === "botMid"){
                            this.game.jellyfish.x -= frameWidth;
                            this.game.jellyfish.y += frameHeight;
                        }
                        if (this.box2Frame === "botRight"){
                            this.game.jellyfish.y += frameHeight;
                        }
                    }
                }

                if (this.box1Frame === "botLeft"){
                    if (obj === "gary"){
                        if (this.box2Frame === "topLeft"){
                            this.game.gary.y -= frameHeight;
                        }
                        if (this.box2Frame === "topMid"){
                            this.game.gary.x += frameWidth;
                            this.game.gary.y -= frameHeight
                        }
                        if (this.box2Frame === "topRight"){
                            this.game.gary.x += (2 * frameWidth);
                            this.game.gary.y -= frameHeight;
                        }
                        if (this.box2Frame === "botMid"){
                            this.game.gary.x += frameWidth;
                        }
                        if (this.box2Frame === "botRight"){
                            this.game.gary.x += (2 * frameWidth);
                        }
                        // console.log(this.game.gary.x)
                        // console.log(this.game.gary.y)
                        // console.log(frameWidth)
                        // console.log(frameHeight)
                    }

                    if (obj === "rock"){
                        if (this.box2Frame === "topLeft"){
                            this.game.rock.y -= frameHeight;
                        }
                        if (this.box2Frame === "topMid"){
                            this.game.rock.x += frameWidth;
                            this.game.rock.y -= frameHeight
                        }
                        if (this.box2Frame === "topRight"){
                            this.game.rock.x += (2 * frameWidth);
                            this.game.rock.y -= frameHeight;
                        }
                        if (this.box2Frame === "botMid"){
                            this.game.rock.x += frameWidth;
                        }
                        if (this.box2Frame === "botRight"){
                            this.game.rock.x += (2 * frameWidth);
                        }
                    }

                    if (obj === "jellyfish"){
                        if (this.box2Frame === "topLeft"){
                            this.game.jellyfish.y -= frameHeight;
                        }
                        if (this.box2Frame === "topMid"){
                            this.game.jellyfish.x += frameWidth;
                            this.game.jellyfish.y -= frameHeight
                        }
                        if (this.box2Frame === "topRight"){
                            this.game.jellyfish.x += (2 * frameWidth);
                            this.game.jellyfish.y -= frameHeight;
                        }
                        if (this.box2Frame === "botMid"){
                            this.game.jellyfish.x += frameWidth;
                        }
                        if (this.box2Frame === "botRight"){
                            this.game.jellyfish.x += (2 * frameWidth);
                        }
                    }
                }

                if (this.box1Frame === "botMid"){
                    if (obj === "gary"){
                        if (this.box2Frame === "topLeft"){
                            this.game.gary.x -= frameWidth
                            this.game.gary.y -= frameHeight;
                        }
                        if (this.box2Frame === "topMid"){
                            this.game.gary.y -= frameHeight
                        }
                        if (this.box2Frame === "topRight"){
                            this.game.gary.x += frameWidth;
                            this.game.gary.y -= frameHeight;
                        }
                        if (this.box2Frame === "botLeft"){
                            this.game.gary.x -= frameWidth;
                        }
                        if (this.box2Frame === "botRight"){
                            this.game.gary.x += frameWidth;
                        }
                    }

                    if (obj === "rock"){
                        if (this.box2Frame === "topLeft"){
                            this.game.rock.x -= frameWidth
                            this.game.rock.y -= frameHeight;
                        }
                        if (this.box2Frame === "topMid"){
                            this.game.rock.y -= frameHeight
                        }
                        if (this.box2Frame === "topRight"){
                            this.game.rock.x += frameWidth;
                            this.game.rock.y -= frameHeight;
                        }
                        if (this.box2Frame === "botLeft"){
                            this.game.rock.x -= frameWidth;
                        }
                        if (this.box2Frame === "botRight"){
                            this.game.rock.x += frameWidth;
                        }
                    }

                    if (obj === "jellyfish"){
                        if (this.box2Frame === "topLeft"){
                            this.game.jellyfish.x -= frameWidth
                            this.game.jellyfish.y -= frameHeight;
                        }
                        if (this.box2Frame === "topMid"){
                            this.game.jellyfish.y -= frameHeight
                        }
                        if (this.box2Frame === "topRight"){
                            this.game.jellyfish.x += frameWidth;
                            this.game.jellyfish.y -= frameHeight;
                        }
                        if (this.box2Frame === "botLeft"){
                            this.game.jellyfish.x -= frameWidth;
                        }
                        if (this.box2Frame === "botRight"){
                            this.game.jellyfish.x += frameWidth;
                        }
                    }
                }

                if (this.box1Frame === "botRight"){
                    if (obj === "gary"){
                        if (this.box2Frame === "topLeft"){
                            this.game.gary.x -= (2 * frameWidth);
                            this.game.gary.y -= frameHeight;
                        }
                        if (this.box2Frame === "topMid"){
                            this.game.gary.x -= frameWidth
                            this.game.gary.y -= frameHeight
                        }
                        if (this.box2Frame === "topRight"){
                            this.game.gary.y -= frameHeight;
                        }
                        if (this.box2Frame === "botLeft"){
                            this.game.gary.x -= (2 * frameWidth);
                        }
                        if (this.box2Frame === "botMid"){
                            this.game.gary.x -= frameWidth;
                        }
                    }

                    if (obj === "rock"){
                        if (this.box2Frame === "topLeft"){
                            this.game.rock.x -= frameWidth
                            this.game.rock.y -= frameHeight;
                        }
                        if (this.box2Frame === "topMid"){
                            this.game.rock.y -= frameHeight
                        }
                        if (this.box2Frame === "topRight"){
                            this.game.rock.x += frameWidth;
                            this.game.rock.y -= frameHeight;
                        }
                        if (this.box2Frame === "botLeft"){
                            this.game.rock.x -= frameWidth;
                        }
                        if (this.box2Frame === "botRight"){
                            this.game.rock.x += frameWidth;
                        }
                    }

                    if (obj === "jellyfish"){
                        if (this.box2Frame === "topLeft"){
                            this.game.jellyfish.x -= frameWidth
                            this.game.jellyfish.y -= frameHeight;
                        }
                        if (this.box2Frame === "topMid"){
                            this.game.jellyfish.y -= frameHeight
                        }
                        if (this.box2Frame === "topRight"){
                            this.game.jellyfish.x += frameWidth;
                            this.game.jellyfish.y -= frameHeight;
                        }
                        if (this.box2Frame === "botLeft"){
                            this.game.jellyfish.x -= frameWidth;
                        }
                        if (this.box2Frame === "botRight"){
                            this.game.jellyfish.x += frameWidth;
                        }
                    }
                }
            }


            for (const obj in this.box2){
                if (this.box2Frame === "topLeft"){
                    // this.game.gary.x += 100;
                    // console.log(this.game.gary.x)
                    // console.log(this.game.gary.x)
                    // console.log(obj)
                    // console.log(this.box1)
                    // console.log("hi")
                    if (obj === "gary"){
                        if (this.box1Frame === "topMid"){
                            this.game.gary.x += frameWidth;
                        }
                        if (this.box1Frame === "topRight"){
                            this.game.gary.x += (2 * frameWidth);
                        }
                        if (this.box1Frame === "botLeft"){
                            this.game.gary.y += frameHeight;
                        }
                        if (this.box1Frame === "botMid"){
                            this.game.gary.x += frameWidth;
                            this.game.gary.y += frameHeight;
                        }
                        if (this.box1Frame === "botRight"){
                            this.game.gary.x += (2 * frameWidth);
                            this.game.gary.y += frameHeight;
                        }
                    }

                    if (obj === "rock"){
                        if (this.box1Frame === "topMid"){
                            this.game.rock.x += frameWidth;
                        }
                        if (this.box1Frame === "topRight"){
                            this.game.rock.x += (2 * frameWidth);
                        }
                        if (this.box1Frame === "botLeft"){
                            this.game.rock.y += frameHeight;
                        }
                        if (this.box1Frame === "botMid"){
                            this.game.rock.x += frameWidth;
                            this.game.rock.y += frameHeight;
                        }
                        if (this.box1Frame === "botRight"){
                            this.game.rock.x += (2 * frameWidth);
                            this.game.rock.y += frameHeight;
                        }
                    }

                    if (obj === "jellyfish"){
                        if (this.box1Frame === "topMid"){
                            this.game.jellyfish.x += frameWidth;
                        }
                        if (this.box1Frame === "topRight"){
                            this.game.jellyfish.x += (2 * frameWidth);
                        }
                        if (this.box1Frame === "botLeft"){
                            this.game.jellyfish.y += frameHeight;
                        }
                        if (this.box1Frame === "botMid"){
                            this.game.jellyfish.x += frameWidth;
                            this.game.jellyfish.y += frameHeight;
                        }
                        if (this.box1Frame === "botRight"){
                            this.game.jellyfish.x += (2 * frameWidth);
                            this.game.jellyfish.y += frameHeight;
                        }
                    }
                }

                if (this.box2Frame === "topMid"){
                    if (obj === "gary"){
                        if (this.box1Frame === "topLeft"){
                            this.game.gary.x -= frameWidth;
                        }
                        if (this.box1Frame === "topRight"){
                            this.game.gary.x += frameWidth;
                        }
                        if (this.box1Frame === "botLeft"){
                            this.game.gary.x -= frameWidth;
                            this.game.gary.y += frameHeight;
                        }
                        if (this.box1Frame === "botMid"){
                            this.game.gary.y += frameHeight;
                        }
                        if (this.box1Frame === "botRight"){
                            this.game.gary.x += frameWidth;
                            this.game.gary.y += frameHeight;
                        }
                    }

                    if (obj === "rock"){
                        if (this.box1Frame === "topLeft"){
                            this.game.rock.x -= frameWidth;
                        }
                        if (this.box1Frame === "topRight"){
                            this.game.rock.x += frameWidth;
                        }
                        if (this.box1Frame === "botLeft"){
                            this.game.rock.x -= frameWidth;
                            this.game.rock.y += frameHeight;
                        }
                        if (this.box1Frame === "botMid"){
                            this.game.rock.y += frameHeight;
                        }
                        if (this.box1Frame === "botRight"){
                            this.game.rock.x += frameWidth;
                            this.game.rock.y += frameHeight;
                        }
                    }

                    if (obj === "jellyfish"){
                        if (this.box1Frame === "topLeft"){
                            this.game.jellyfish.x -= frameWidth;
                        }
                        if (this.box1Frame === "topRight"){
                            this.game.jellyfish.x += frameWidth;
                        }
                        if (this.box1Frame === "botLeft"){
                            this.game.jellyfish.x -= frameWidth;
                            this.game.jellyfish.y += frameHeight;
                        }
                        if (this.box1Frame === "botMid"){
                            this.game.jellyfish.y += frameHeight;
                        }
                        if (this.box1Frame === "botRight"){
                            this.game.jellyfish.x += frameWidth;
                            this.game.jellyfish.y += frameHeight;
                        }
                    }
                }

                if (this.box2Frame === "topRight"){
                    if (obj === "gary"){
                        if (this.box1Frame === "topLeft"){
                            this.game.gary.x -= (2 * frameWidth);
                        }
                        if (this.box1Frame === "topMid"){
                            this.game.gary.x -= frameWidth;
                        }
                        if (this.box1Frame === "botLeft"){
                            this.game.gary.x -= (2 * frameWidth);
                            this.game.gary.y += frameHeight;
                        }
                        if (this.box1Frame === "botMid"){
                            this.game.gary.x -= frameWidth;
                            this.game.gary.y += frameHeight;
                        }
                        if (this.box1Frame === "botRight"){
                            this.game.gary.y += frameHeight;
                        }
                    }

                    if (obj === "rock"){
                        if (this.box1Frame === "topLeft"){
                            this.game.rock.x -= (2 * frameWidth);
                        }
                        if (this.box1Frame === "topMid"){
                            this.game.rock.x -= frameWidth;
                        }
                        if (this.box1Frame === "botLeft"){
                            this.game.rock.x -= (2 * frameWidth);
                            this.game.rock.y += frameHeight;
                        }
                        if (this.box1Frame === "botMid"){
                            this.game.rock.x -= frameWidth;
                            this.game.rock.y += frameHeight;
                        }
                        if (this.box1Frame === "botRight"){
                            this.game.rock.y += frameHeight;
                        }
                    }

                    if (obj === "jellyfish"){
                        if (this.box1Frame === "topLeft"){
                            this.game.jellyfish.x -= (2 * frameWidth);
                        }
                        if (this.box1Frame === "topMid"){
                            this.game.jellyfish.x -= frameWidth;
                        }
                        if (this.box1Frame === "botLeft"){
                            this.game.jellyfish.x -= (2 * frameWidth);
                            this.game.jellyfish.y += frameHeight;
                        }
                        if (this.box1Frame === "botMid"){
                            this.game.jellyfish.x -= frameWidth;
                            this.game.jellyfish.y += frameHeight;
                        }
                        if (this.box1Frame === "botRight"){
                            this.game.jellyfish.y += frameHeight;
                        }
                    }
                }

                if (this.box2Frame === "botLeft"){
                    if (obj === "gary"){
                        if (this.box1Frame === "topLeft"){
                            this.game.gary.y -= frameHeight;
                        }
                        if (this.box1Frame === "topMid"){
                            this.game.gary.x += frameWidth;
                            this.game.gary.y -= frameHeight
                        }
                        if (this.box1Frame === "topRight"){
                            this.game.gary.x += (2 * frameWidth);
                            this.game.gary.y -= frameHeight;
                        }
                        if (this.box1Frame === "botMid"){
                            this.game.gary.x += frameWidth;
                        }
                        if (this.box1Frame === "botRight"){
                            this.game.gary.x += (2 * frameWidth);
                        }
                        // console.log(this.game.gary.x)
                        // console.log(this.game.gary.y)
                        // console.log(frameWidth)
                        // console.log(frameHeight)
                    }

                    if (obj === "rock"){
                        if (this.box1Frame === "topLeft"){
                            this.game.rock.y -= frameHeight;
                        }
                        if (this.box1Frame === "topMid"){
                            this.game.rock.x += frameWidth;
                            this.game.rock.y -= frameHeight
                        }
                        if (this.box1Frame === "topRight"){
                            this.game.rock.x += (2 * frameWidth);
                            this.game.rock.y -= frameHeight;
                        }
                        if (this.box1Frame === "botMid"){
                            this.game.rock.x += frameWidth;
                        }
                        if (this.box1Frame === "botRight"){
                            this.game.rock.x += (2 * frameWidth);
                        }
                    }

                    if (obj === "jellyfish"){
                        if (this.box1Frame === "topLeft"){
                            this.game.jellyfish.y -= frameHeight;
                        }
                        if (this.box1Frame === "topMid"){
                            this.game.jellyfish.x += frameWidth;
                            this.game.jellyfish.y -= frameHeight
                        }
                        if (this.box1Frame === "topRight"){
                            this.game.jellyfish.x += (2 * frameWidth);
                            this.game.jellyfish.y -= frameHeight;
                        }
                        if (this.box1Frame === "botMid"){
                            this.game.jellyfish.x += frameWidth;
                        }
                        if (this.box1Frame === "botRight"){
                            this.game.jellyfish.x += (2 * frameWidth);
                        }
                    }
                }

                if (this.box2Frame === "botMid"){
                    if (obj === "gary"){
                        if (this.box1Frame === "topLeft"){
                            this.game.gary.x -= frameWidth
                            this.game.gary.y -= frameHeight;
                        }
                        if (this.box1Frame === "topMid"){
                            this.game.gary.y -= frameHeight
                        }
                        if (this.box1Frame === "topRight"){
                            this.game.gary.x += frameWidth;
                            this.game.gary.y -= frameHeight;
                        }
                        if (this.box1Frame === "botLeft"){
                            this.game.gary.x -= frameWidth;
                        }
                        if (this.box1Frame === "botRight"){
                            this.game.gary.x += frameWidth;
                        }
                    }

                    if (obj === "rock"){
                        if (this.box1Frame === "topLeft"){
                            this.game.rock.x -= frameWidth
                            this.game.rock.y -= frameHeight;
                        }
                        if (this.box1Frame === "topMid"){
                            this.game.rock.y -= frameHeight
                        }
                        if (this.box1Frame === "topRight"){
                            this.game.rock.x += frameWidth;
                            this.game.rock.y -= frameHeight;
                        }
                        if (this.box1Frame === "botLeft"){
                            this.game.rock.x -= frameWidth;
                        }
                        if (this.box1Frame === "botRight"){
                            this.game.rock.x += frameWidth;
                        }
                    }

                    if (obj === "jellyfish"){
                        if (this.box1Frame === "topLeft"){
                            this.game.jellyfish.x -= frameWidth
                            this.game.jellyfish.y -= frameHeight;
                        }
                        if (this.box1Frame === "topMid"){
                            this.game.jellyfish.y -= frameHeight
                        }
                        if (this.box1Frame === "topRight"){
                            this.game.jellyfish.x += frameWidth;
                            this.game.jellyfish.y -= frameHeight;
                        }
                        if (this.box1Frame === "botLeft"){
                            this.game.jellyfish.x -= frameWidth;
                        }
                        if (this.box1Frame === "botRight"){
                            this.game.jellyfish.x += frameWidth;
                        }
                    }
                }

                if (this.box2Frame === "botRight"){
                    if (obj === "gary"){
                        if (this.box1Frame === "topLeft"){
                            this.game.gary.x -= (2 * frameWidth);
                            this.game.gary.y -= frameHeight;
                        }
                        if (this.box1Frame === "topMid"){
                            this.game.gary.x -= frameWidth
                            this.game.gary.y -= frameHeight
                        }
                        if (this.box1Frame === "topRight"){
                            this.game.gary.y -= frameHeight;
                        }
                        if (this.box1Frame === "botLeft"){
                            this.game.gary.x -= (2 * frameWidth);
                        }
                        if (this.box1Frame === "botMid"){
                            this.game.gary.x -= frameWidth;
                        }
                    }

                    if (obj === "rock"){
                        if (this.box1Frame === "topLeft"){
                            this.game.rock.x -= frameWidth
                            this.game.rock.y -= frameHeight;
                        }
                        if (this.box1Frame === "topMid"){
                            this.game.rock.y -= frameHeight
                        }
                        if (this.box1Frame === "topRight"){
                            this.game.rock.x += frameWidth;
                            this.game.rock.y -= frameHeight;
                        }
                        if (this.box1Frame === "botLeft"){
                            this.game.rock.x -= frameWidth;
                        }
                        if (this.box1Frame === "botRight"){
                            this.game.rock.x += frameWidth;
                        }
                    }

                    if (obj === "jellyfish"){
                        if (this.box1Frame === "topLeft"){
                            this.game.jellyfish.x -= frameWidth
                            this.game.jellyfish.y -= frameHeight;
                        }
                        if (this.box1Frame === "topMid"){
                            this.game.jellyfish.y -= frameHeight
                        }
                        if (this.box1Frame === "topRight"){
                            this.game.jellyfish.x += frameWidth;
                            this.game.jellyfish.y -= frameHeight;
                        }
                        if (this.box1Frame === "botLeft"){
                            this.game.jellyfish.x -= frameWidth;
                        }
                        if (this.box1Frame === "botRight"){
                            this.game.jellyfish.x += frameWidth;
                        }
                    }
                }
            }
            // console.log(this.box1)
            this.box1 = {};
            this.box2 = {};
            this.selectFrame = 0;
            // this.game.pause = true;
        }
        requestAnimationFrame(this.checkStatus.bind(this));
    }

    click(){
        const xPts = []
        const yPts = []

        for (let row = 0; row <= this.game.canvas.width; row += this.x){
            xPts.push(row);
        }

        for (let col = 0; col <= this.game.canvas.height; col += this.y){
            yPts.push(col);
        }

        this.topLeft = [xPts[0], xPts[1], yPts[0], yPts[1]];
        this.topMid = [xPts[1], xPts[2], yPts[0], yPts[1]];
        this.topRight = [xPts[2], xPts[3], yPts[0], yPts[1]];
        this.botLeft = [xPts[0], xPts[1], yPts[1], yPts[2]];
        this.botMid = [xPts[1], xPts[2], yPts[1], yPts[2]];
        this.botRight = [xPts[2], xPts[3], yPts[1], yPts[2]];

        addEventListener("click", e => {
            if (
                (e.offsetX > this.topLeft[0] && e.offsetX < this.topLeft[1]) &&
                (e.offsetY > this.topLeft[2] && e.offsetY < this.topLeft[3])
                // this.frame.ctx.isPointInPath(x, y)
            ){ 
                // console.log("hi");
                this.selectFrame += 1;
                // console.log(this.game.gary.x);
                // console.log(this.selectFrame)
                if (this.selectFrame === 1){
                    this.box1Frame = "topLeft";
                    if (
                        (this.game.gary.x > this.topLeft[0] && this.game.gary.x < this.topLeft[1] && this.game.gary.y < this.topLeft[3])
                    ){
                        // this.box1.gary = 0;
                        // console.log(this.box1Frame)
                        this.box1.gary = this.game.gary.x;
                    }

                    if (
                        (this.game.rock.x > this.topLeft[0] && this.game.rock.x < this.topLeft[1] && this.game.rock.y < this.topLeft[3])
                    ){
                        this.box1.rock = this.game.rock.x;
                    }

                    if (
                        (this.game.jellyfish.x > this.topLeft[0] && this.game.jellyfish.x < this.topLeft[1] && this.game.jellyfish.y < this.topLeft[3])
                    ){
                        this.box1.jellyfish = this.game.jellyfish.x;
                    }
                }

                if (this.selectFrame === 2){
                    this.box2Frame = "topLeft";
                    if (
                        (this.game.gary.x > this.topLeft[0] && this.game.gary.x < this.topLeft[1] && this.game.gary.y < this.topLeft[3])
                    ){
                        this.box2.gary = this.game.gary.x;
                    }

                    if (
                        (this.game.rock.x > this.topLeft[0] && this.game.rock.x < this.topLeft[1] && this.game.rock.y < this.topLeft[3])
                    ){
                        this.box2.rock = this.game.rock.x;
                    }

                    if (
                        (this.game.jellyfish.x > this.topLeft[0] && this.game.jellyfish.x < this.topLeft[1] && this.game.jellyfish.y < this.topLeft[3])
                    ){
                        this.box2.jellyfish = this.game.jellyfish.x;
                    }
                }
                // if (this.selectFrame === 1){
                //     if (this.game.gary){}
                // }
                // this.ctx.strokeStyle = "red";
                // this.ctx.strokeRect(this.topLeft[0], this.topLeft[2], this.x, this.y);
                // this.ctx.stroke();
            } 
            // this.ctx.strokeStyle = "lightgray";
            // this.ctx.strokeRect(this.topLeft[0], this.topLeft[2], this.x, this.y);
            // this.ctx.stroke();
            // }
    
            //top mid frame
            if (
                (e.offsetX > this.topMid[0] && e.offsetX < this.topMid[1]) &&
                (e.offsetY > this.topMid[2] && e.offsetY < this.topMid[3])
            ){ 
                this.selectFrame += 1;

                if (this.selectFrame === 1){
                    this.box1Frame = "topMid";
                    if (
                        (this.game.gary.x > this.topMid[0] && this.game.gary.x < this.topMid[1] && this.game.gary.y < this.topLeft[3])
                    ){
                        // console.log(this.topLeft[3])
                        this.box1.gary = this.game.gary.x;
                        // console.log(this.box1)
                        // console.log(this.box1Frame)
                    }

                    if (
                        (this.game.rock.x > this.topMid[0] && this.game.rock.x < this.topMid[1] && this.game.rock.y < this.topLeft[3])
                    ){
                        this.box1.rock = this.game.rock.x;
                    }

                    if (
                        (this.game.jellyfish.x > this.topMid[0] && this.game.jellyfish.x < this.topMid[1] && this.game.jellyfish.y < this.topLeft[3])
                    ){
                        this.box1.jellyfish = this.game.jellyfish.x;
                    }
                }

                if (this.selectFrame === 2){
                    this.box2Frame = "topMid";
                    if (
                        (this.game.gary.x > this.topMid[0] && this.game.gary.x < this.topMid[1] && this.game.gary.y < this.topLeft[3])
                    ){
                        this.box2.gary = this.game.gary.x;
                    }

                    if (
                        (this.game.rock.x > this.topMid[0] && this.game.rock.x < this.topMid[1] && this.game.rock.y < this.topLeft[3])
                    ){
                        this.box2.rock = this.game.rock.x;
                    }

                    if (
                        (this.game.jellyfish.x > this.topMid[0] && this.game.jellyfish.x < this.topMid[1] && this.game.jellyfish.y < this.topLeft[3])
                    ){
                        this.box2.jellyfish = this.game.jellyfish.x;
                    }
                }
                // this.ctx.strokeStyle = "red";
                // this.ctx.strokeRect(this.topMid[0], this.topMid[2], this.x, this.y);
                // this.ctx.stroke();
            }
            // this.ctx.clearRect(0, 0, thisFrame.width, thisFrame.height);
            // this.ctx.strokeStyle = "lightgray";
            // this.ctx.strokeRect(this.topMid[0], this.topMid[2], this.x, this.y);
            // this.ctx.stroke();
            // }
    
            //top right frame
            if (
                (e.offsetX > this.topRight[0] && e.offsetX < this.topRight[1]) &&
                (e.offsetY > this.topRight[2] && e.offsetY < this.topRight[3])
            ){ 
                this.selectFrame += 1;

                if (this.selectFrame === 1){
                    this.box1Frame = "topRight";
                    if (
                        (this.game.gary.x > this.topRight[0] && this.game.gary.x < this.topRight[1] && this.game.gary.y < this.topLeft[3])
                    ){
                        this.box1.gary = this.game.gary.x;
                    }

                    if (
                        (this.game.rock.x > this.topRight[0] && this.game.rock.x < this.topRight[1] && this.game.rock.y < this.topLeft[3])
                    ){
                        this.box1.rock = this.game.rock.x;
                    }

                    if (
                        (this.game.jellyfish.x > this.topRight[0] && this.game.jellyfish.x < this.topRight[1] && this.game.jellyfish.y < this.topLeft[3])
                    ){
                        this.box1.jellyfish = this.game.jellyfish.x;
                    }
                }

                if (this.selectFrame === 2){
                    this.box2Frame = "topRight";
                    if (
                        (this.game.gary.x > this.topRight[0] && this.game.gary.x < this.topRight[1] && this.game.gary.y < this.topLeft[3])
                    ){
                        this.box2.gary = this.game.gary.x;
                    }

                    if (
                        (this.game.rock.x > this.topRight[0] && this.game.rock.x < this.topRight[1] && this.game.rock.y < this.topLeft[3])
                    ){
                        this.box2.rock = this.game.rock.x;
                    }

                    if (
                        (this.game.jellyfish.x > this.topRight[0] && this.game.jellyfish.x < this.topRight[1] && this.game.jellyfish.y < this.topLeft[3])
                    ){
                        this.box2.jellyfish = this.game.jellyfish.x;
                    }
                }
                // this.ctx.strokeStyle = "red";
                // this.ctx.strokeRect(this.topRight[0], this.topRight[2], this.x, this.y);
                // this.ctx.stroke();
            }
            // this.ctx.clearRect(0, 0, thisFrame.width, thisFrame.height);
            // this.ctx.strokeStyle = "lightgray";
            // this.ctx.strokeRect(this.topMid[0], this.topMid[2], this.x, this.y);
            // this.ctx.stroke();
            // }
    
            //bot left frame
            if (
                (e.offsetX > this.botLeft[0] && e.offsetX < this.botLeft[1]) &&
                (e.offsetY > this.botLeft[2] && e.offsetY < this.botLeft[3])
            ){ 
                this.selectFrame += 1;

                if (this.selectFrame === 1){
                    this.box1Frame = "botLeft";
                    if (
                        (this.game.gary.x > this.botLeft[0] && this.game.gary.x < this.botLeft[1] && this.game.gary.y > this.topLeft[3])
                    ){
                        // this.box1[gary_pos] = 0;
                        this.box1.gary = this.game.gary.x;
                        // console.log(this.box1)
                    }

                    if (
                        (this.game.rock.x > this.botLeft[0] && this.game.rock.x < this.botLeft[1] && this.game.rock.y > this.topLeft[3])
                    ){
                        this.box1.rock = this.game.rock.x;
                    }

                    if (
                        (this.game.jellyfish.x > this.botLeft[0] && this.game.jellyfish.x < this.botLeft[1] && this.game.jellyfish.y > this.topLeft[3])
                    ){
                        this.box1.jellyfish = this.game.jellyfish.x;
                    }
                }

                if (this.selectFrame === 2){
                    this.box2Frame = "botLeft";
                    if (
                        (this.game.gary.x > this.botLeft[0] && this.game.gary.x < this.botLeft[1] && this.game.gary.y > this.topLeft[3])
                    ){
                        this.box2.gary = this.game.gary.x;
                    }

                    if (
                        (this.game.rock.x > this.botLeft[0] && this.game.rock.x < this.botLeft[1] && this.game.rock.y > this.topLeft[3])
                    ){
                        this.box2.rock = this.game.rock.x;
                    }

                    if (
                        (this.game.jellyfish.x > this.botLeft[0] && this.game.jellyfish.x < this.botLeft[1] && this.game.jellyfish.y > this.topLeft[3])
                    ){
                        this.box2.jellyfish = this.game.jellyfish.x;
                    }
                }
                // this.ctx.strokeStyle = "red";
                // this.ctx.strokeRect(this.botLeft[0], this.botLeft[2], this.x, this.y);
                // this.ctx.stroke();
            }
            // this.ctx.strokeStyle = "lightgray";
            // this.ctx.strokeRect(this.topMid[0], this.topMid[2], this.x, this.y);
            // this.ctx.stroke();
            
            //bot mid frame
            if (
                (e.offsetX > this.botMid[0] && e.offsetX < this.botMid[1]) &&
                (e.offsetY > this.botMid[2] && e.offsetY < this.botMid[3])
            ){ 
                this.selectFrame += 1;

                if (this.selectFrame === 1){
                    this.box1Frame = "botMid";
                    if (
                        (this.game.gary.x > this.botMid[0] && this.game.gary.x < this.botMid[1] && this.game.gary.y > this.topLeft[3])
                    ){
                        this.box1.gary = this.game.gary.x;
                    }

                    if (
                        (this.game.rock.x > this.botMid[0] && this.game.rock.x < this.botMid[1] && this.game.rock.y > this.topLeft[3])
                    ){
                        this.box1.rock = this.game.rock.x;
                    }

                    if (
                        (this.game.jellyfish.x > this.botMid[0] && this.game.jellyfish.x < this.botMid[1] && this.game.jellyfish.y > this.topLeft[3])
                    ){
                        this.box1.jellyfish = this.game.jellyfish.x;
                    }
                }

                if (this.selectFrame === 2){
                    this.box2Frame = "botMid";
                    if (
                        (this.game.gary.x > this.botMid[0] && this.game.gary.x < this.botMid[1] && this.game.gary.y > this.topLeft[3])
                    ){
                        this.box2.gary = this.game.gary.x;
                    }

                    if (
                        (this.game.rock.x > this.botMid[0] && this.game.rock.x < this.botMid[1] && this.game.rock.y > this.topLeft[3])
                    ){
                        this.box2.rock = this.game.rock.x;
                    }

                    if (
                        (this.game.jellyfish.x > this.botMid[0] && this.game.jellyfish.x < this.botMid[1] && this.game.jellyfish.y > this.topLeft[3])
                    ){
                        this.box2.jellyfish = this.game.jellyfish.x;
                    }
                }
                // this.ctx.strokeStyle = "red";
                // this.ctx.strokeRect(this.botMid[0], this.botMid[2], this.x, this.y);
                // this.ctx.stroke();
            }
            // this.ctx.strokeStyle = "lightgray";
            // this.ctx.strokeRect(this.topMid[0], this.topMid[2], this.x, this.y);
            // this.ctx.stroke();
    
            //bot right frame
            if (
                (e.offsetX > this.botRight[0] && e.offsetX < this.botRight[1]) &&
                (e.offsetY > this.botRight[2] && e.offsetY < this.botRight[3])
            ){ 
                this.selectFrame += 1;

                if (this.selectFrame === 1){
                    this.box1Frame = "botRight";
                    if (
                        (this.game.gary.x > this.botRight[0] && this.game.gary.x < this.botRight[1] && this.game.gary.y > this.topLeft[3])
                    ){
                        this.box1.gary = this.game.gary.x;
                    }

                    if (
                        (this.game.rock.x > this.botRight[0] && this.game.rock.x < this.botRight[1] && this.game.rock.y > this.topLeft[3])
                    ){
                        this.box1.rock = this.game.rock.x;
                    }

                    if (
                        (this.game.jellyfish.x > this.botRight[0] && this.game.jellyfish.x < this.botRight[1] && this.game.jellyfish.y > this.topLeft[3])
                    ){
                        this.box1.jellyfish = this.game.jellyfish.x;
                    }
                }

                if (this.selectFrame === 2){
                    this.box2Frame = "botRight";
                    if (
                        (this.game.gary.x > this.botRight[0] && this.game.gary.x < this.botRight[1] && this.game.gary.y > this.topLeft[3])
                    ){
                        this.box2.gary = this.game.gary.x;
                    }

                    if (
                        (this.game.rock.x > this.botRight[0] && this.game.rock.x < this.botRight[1] && this.game.rock.y > this.topLeft[3])
                    ){
                        this.box2.rock = this.game.rock.x;
                    }

                    if (
                        (this.game.jellyfish.x > this.botRight[0] && this.game.jellyfish.x < this.botRight[1] && this.game.jellyfish.y > this.topLeft[3])
                    ){
                        this.box2.jellyfish = this.game.jellyfish.x;
                    }
                }
                // this.ctx.strokeStyle = "red";
                // this.ctx.strokeRect(this.botRight[0], this.botRight[2], this.x, this.y);
                // this.ctx.stroke();
            }
            // this.ctx.strokeStyle = "lightgray";
            // this.ctx.strokeRect(this.topMid[0], this.topMid[2], this.x, this.y);
            // this.ctx.stroke();
    
            // for (let row = 0; row <= this.game.width; row += x){
            //     for (let col = 0; col <= this.game.height; col += y){
            //         this.game.ctx.strokeStyle = this.strokeStyle;
            //         this.game.ctx.strokeRect(row, col, this.x, this.y);
            //         // (row,col), (row+x,col), (row, col+y), (row+x, col+y)
            //         // (row,col,row+x,col+y)
            //         this.game.ctx.stroke();
            //     }
            //     // }
            // }
        })
    }
}