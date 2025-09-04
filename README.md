# Ejercicios de Nivel 2 de Angular

# 🟨 Ejercicios Intermedios con `@Input()` y `@Output()`

## ✅ Nivel 2 – Intermedio
- [x] **Lista de tareas (Input)**  
  Crea un `TodoListComponent` que reciba con `@Input()` un arreglo de strings con tareas.  
  Muestra cada tarea en una lista `<ul>`.

- [ ] **Eliminar tarea (Output)**  
  En el mismo `TodoListComponent`, agrega un botón ❌ al lado de cada tarea.  
  Al hacer clic, emite un evento al padre con el **índice** de la tarea a eliminar.  
  El padre debe actualizar la lista.

- [ ] **Contador controlado**  
  Haz un `CounterComponent` con botones ➕ y ➖.  
  Cada vez que cambie el valor, emite un `@Output()` con el nuevo número.  
  El padre lo recibe y lo muestra en pantalla.
  
-   [ ] Crear un **componente de lista de productos** que recibe un
    array de productos desde el padre mediante `@Input()`.
-   [ ] Hacer que cada producto tenga un botón **"Añadir al carrito"**
    que emite un evento con el producto al padre mediante `@Output()`.
-   [ ] Crear un **componente hijo contador** que recibe un valor
    inicial con `@Input()` y emite los cambios al padre con `@Output()`.
-   [ ] Implementar un **componente de estrella de rating** ⭐ que
    recibe una calificación inicial (`@Input()`) y emite el rating
    seleccionado cuando el usuario hace clic.
-   [ ] Crear un **componente modal** que se abre/cierra según una
    propiedad `@Input()` y emite un evento `cerrar` al padre cuando el
    usuario lo cierre.
-   [ ] Hacer un **formulario hijo** que recibe un objeto usuario con
    `@Input()`, y cuando se edite y se guarde emite el objeto
    actualizado al padre con `@Output()`.
-   [ ] Practicar pasar datos de **abuelo → padre → hijo** (encadenar
    `@Input`) y **hijo → padre → abuelo** (encadenar `@Output`).