import { Component } from '@angular/core';

// Componente Principal que se carga al Arrancar la App.
// Selector: Nombre de la Etiqueta para inyectar componente en HTLML.
// TemplateUrl: Vista del HTML.
// StyleUrls: Estilos para la Vista formato scss.

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Variable
  title = 'AngularApp';
  productos = [{
		"id": 1,
		"producto": "Ordenador",
    "precio": 1200.5,
    "imagen": "https://i.blogs.es/cab5c5/asus-vivopc-x-1/450_1000.jpg",
		"categoria": {
			"id": 1,
			"categoria": "Informatica"
		},

		"historico": [{
				"fecha": "17/01/2020",
				"precio": 1200.5
			},
			{
				"fecha": "17/01/2020",
				"precio": 1300
			},
			{
				"fecha": "17/01/2020",
				"precio": 1350.99
			}
		]
	},
	{
		"id": 2,
		"producto": "Switch",
    "precio": 500,
    "imagen": "https://www.usedcisco.de/media/image/c8/a7/28/slm2048-10159952-014_600x600.jpg",
		"categoria": {
			"id": 1,
			"categoria": "Informatica"
		},

		"historico": [{
				"fecha": "17/01/2020",
				"precio": 500
			},
			{
				"fecha": "17/01/2020",
				"precio": 600
			},
			{
				"fecha": "17/01/2020",
				"precio": 700
			}
		]
	},
	{
		"id": 3,
		"producto": "Hub",
    "precio": 200,
    "imagen": "https://www.thomann.de/pics/bdb/460609/14083587_800.jpg",
		"categoria": {
			"id": 1,
			"categoria": "Informatica"
		},

		"historico": [{
				"fecha": "17/01/2020",
				"precio": 200
			},
			{
				"fecha": "17/01/2020",
				"precio": 300
			},
			{
				"fecha": "17/01/2020",
				"precio": 400
			}
		]
	}
  ]
  pSeleccionado = this.productos[0];
  seleccionarProducto = function (producto) {
    console.log("Hemos echo un Click");
    this.pSeleccionado = producto;
  }
}
