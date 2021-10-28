# CSS - Agregando estilos

## Vinculación

- Interna

```
<head>
    ...
    <style>
        ...
    </style>
</head>
```

- Externa

```
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```

- En línea

```
    <h1 style="color:red; text-align:center">
```

## Estructura

- Selector

```
    universal > * {}
    element {}
    .class {}
    #id
```

- Propiedad-Valor

```
    font-size: 15px;
    background-color: red;
    border: 1px dotted blue;
```

# Selectores

- Etiqueta

```
    body {}
    div {}
```

- Clase

```
    .clase {}
```

- Id

```
    #id {}
```

- Combinados

```
    p.miClase{}
    div.boton {}
```

- Descendentes

```
    body div.miClase{}
    #sidebar div.boton > label {}
```

- Jerarquía

```
    html, body, etc.
```

# Fuentes

- Familia / Google Fonts (https://fonts.google.com/)
- Size (https://www.reddit.com/r/webdev/comments/fngh3z/heres_a_cheat_sheet_for_css_units/)
- Style
- font-weight
- text-align
- text-decoration
- line-height
- letter-spacing

# Medidas

px,%,vh/vw,em,rem

# Colores

- Dictionary (https://htmlcolorcodes.com/color-names/)
- hex
- rgb
- rgba
- text
- background
- opacity
  Fondos
- Color
- Imágen
- Repeat
- Position
- Attachment
- Size
