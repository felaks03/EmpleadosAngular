### Receta form tipo model.

      1 - Importamos la libreria al app.module.ts que ReactiveFormsModule
      
      2 -Creamos un atributo dentro de la etiqueta form que se llama formGroup  que contendrá el nombre del formulario.

      3 - Necesitamos implementar el eveno ngSubmit que llame a una funcion que NO RECIBE PARAMETROS.
      la funcion te genera un objeto JSON.

      4 - A cada campo del formulario (input, select, textarea,....) solo le tenemos que añadir un atributo formControlName con el nombre del campo.

      5 - Inicializamos dentro del ts el objeto FormGroup creado en punto 2, donde tenemos obligación de dar de alta cada uno de los campos. (aqui es donde ejecutarmos los validadores)


      ##Estados del formulario

              - Pristine (limpio)   ------- Dirty(sucio)
              - Invalid (invalido) ------  valid(valido)
              - untouched (no tocado) ---- touched( tocado )
              - unsubmitted (sin enviar) --- submitted (enviado)
