import React, { createContext, useState } from "react";

export const Context = createContext(); //contexto

export function ContextProvider(props) {
  const [viewRegistro, setViewRegistro] = useState(false);
  const [viewUsuarios, setViewUsuarios] = useState(false);
  const [viewPedidosUser, setViewPedidosUser] = useState(false);
  const [viewProductosUser, setViewProductosUser] = useState(false);
  const [viewTodosPedidos, setViewTodosPedidos] = useState(false);
  const [viewProductosWeb, setViewProductosWeb] = useState(false);

  const [volverDeProductos, setVolverDeProductos] = useState("");

  const [reload, setReload] = useState(false);

  const token = localStorage.getItem("token");
  const nivel_auth = localStorage.getItem("nivel_auth");
  
  function changeReload(){
    setReload(!reload);
  }

  function changeViewRegistro(setView){
    setViewRegistro(setView);
    setViewUsuarios(false);
    setViewPedidosUser(false);
    setViewProductosUser(false);
    setViewTodosPedidos(false);
    setViewProductosWeb(false);
  }

  function changeViewUsuarios(setView){
    setViewUsuarios(setView);
    setViewRegistro(false);
    setViewPedidosUser(false);
    setViewProductosUser(false);
    setViewTodosPedidos(false);
    setViewProductosWeb(false);
  }

  function changeViewPedidosUser(setView){
    setViewPedidosUser(setView);
    setViewUsuarios(false);
    setViewRegistro(false);
    setViewProductosUser(false);
    setViewTodosPedidos(false);
    setViewProductosWeb(false);
  }

  function changeViewProductosUser(setView){
    setViewProductosUser(setView);
    setViewRegistro(false);
    setViewUsuarios(false);
    setViewPedidosUser(false);
    setViewTodosPedidos(false);
    setViewProductosWeb(false);
  }

  function changeViewTodosPedidos(setView){
    setViewTodosPedidos(setView);
    setViewRegistro(false);
    setViewUsuarios(false);
    setViewPedidosUser(false);
    setViewProductosUser(false);
    setViewProductosWeb(false);
  }

  function changeViewProductosWeb(setView){
    setViewProductosWeb(setView);
    setViewRegistro(false);
    setViewUsuarios(false);
    setViewPedidosUser(false);
    setViewProductosUser(false);
    setViewTodosPedidos(false);
  }

  function changeVolverDeProductos(setVolver){
    setVolverDeProductos(setVolver);
  }

  return (
    <Context.Provider
      value={{
        token,
        nivel_auth,
        reload,
        viewRegistro,
        viewUsuarios,
        viewPedidosUser,
        viewProductosUser,
        viewTodosPedidos,
        viewProductosWeb,
        volverDeProductos,

        changeReload,
        changeViewRegistro,
        changeViewUsuarios,
        changeViewPedidosUser,
        changeViewProductosUser,
        changeViewTodosPedidos,
        changeVolverDeProductos,
        changeViewProductosWeb,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
