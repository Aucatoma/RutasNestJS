import { Controller, Get, Req, Res } from '@nestjs/common';

const fs = require('fs')

@Controller('inicio')

export class InicioController {


  @Get('Home')
  mostrarHome(@Req() request, @Res() response){

    let inicioHTML = '<!DOCTYPE html><head><title>RouteNestJS</title></head>';

     fs.readFile(__dirname + '/html/header.html', "utf8", (err, data)=>{
      if(err && data.length == 0){
        console.log("HEADER HTML: " + data.length);
        return response
          .status(500)
          .send("Error");
      }else{
        inicioHTML += data;
        fs.readFile(__dirname + '/html/contenido.html', "utf8", (err, data)=>{
          if(err && data.length == 0){
            console.log("CONTENIDO HTML: " + data.length);
            return response
              .status(500)
              .send("Error");
          }else{
            inicioHTML += data;
            fs.readFile(__dirname + '/html/footer.html', "utf8", (err, data)=>{
              if(err && data.length == 0){
                console.log("FOOTER HTML: " + data.length);
                return response
                  .status(500)
                  .send("Error");
              }else{
                inicioHTML += data;
                return response
                  .status(200)
                  .send(inicioHTML);
              }
            });
          }
        });
      }
    });

  }


}