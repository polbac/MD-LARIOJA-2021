# Diseño adaptativo

<img width="300" src="https://media.prod.mdn.mozit.cloud/attachments/2019/03/19/16558/29c6fe062e42a327fb549a081bc56632/box-model.png" />

## Caja y sus partes

- content box :
 > lugar donde se muestra el contenido || width / height
 > display:block
    - caja del tipo bloque
    - fuerza al salto de linea, ocupa el 100% de su ancho disponible
    - utiliza width / height
 > display:inline-block
    - caja del tipo en linea
    - no fuerza salto de linea
    - no aplican las propiedades

- padding (relleno):
    > espacio en blanco alrededor del contenido
        -
            >> padding: (top/right/bottom/left)
            >> padding: (top-bottom/right-left)
            >> padding-top / padding-bottom / padding-right / padding-left

- border:
    > envuelve el contenido y el relleno

- margin (capa externa):
    > envuelve el el contenido, el espacio y el borde
        -
            >> margin: (top/right/bottom/left)
            >> margin: (top-bottom/right-left)
            >> margin-top / margin-bottom / margin-right / margin-left

- box-sizing: border-box / content-box
    content-box (default)
        > nuestras cajas tendran su tamaño determinado por la sumatoria de *width/heigth*, padding/margin/border

    <img width="200px" src="https://media.prod.mdn.mozit.cloud/attachments/2019/03/19/16559/d7dbf772b414a2c96d8ac362c15ed352/standard-box-model.png">

    border-box:
        > nuestras cajas tendran su tamaño determinado *width/heigth*, el padding y el border se restarán al tamaño de la caja

    <img  width="200px" src="https://media.prod.mdn.mozit.cloud/attachments/2019/03/19/16557/3e3f8c74c68f5c1fdc6779d7388bc099/alternate-box-model.png">

## Viewport

    - particularidades de la etiqueta viewport
```
    width=device-width initial-scale=1 maximum-scale=1
```

## Media queries

    - Que son?
    - min-width
    - max-width
    - mobile first
    - breakpoints

        >
            0-480: smartphones
            481-768: tables
            769-1279: laptops
            1280+: large desktops & monitors ** px
