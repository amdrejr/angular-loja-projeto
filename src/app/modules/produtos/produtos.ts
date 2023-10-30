export interface IProduto {
  id: number;
  descricao: string;
  preco: number;
  descricaoPreco: string;
  imagem: string;
}

export interface IProdutoCarrinho extends IProduto	{
  quantidade: number;
}

export const produtos = [
  { id: 1, descricao: "Mouse logitech", preco: 339.90, descricaoPreco: "À vista no PIX", imagem: "/assets/mouse-3.jpg" },
  { id: 2, descricao: "Cadeira Gamer DT3", preco: 1900.00, descricaoPreco: "À vista no PIX", desconto: 2000.00, imagem: "/assets/cadeira-gamer.jpg" },
  { id: 3, descricao: "Teclado Mecânico", preco: 749.99, descricaoPreco: "À vista no PIX", imagem: "/assets/teclado-2.jpg" },
  { id: 4, descricao: "Cadeira Gamer Drago", preco: 999.99, descricaoPreco: "À vista no PIX", imagem: "/assets/cadeira-gamer2.jpg" },
  { id: 5, descricao: "Controle Smartphone", preco: 99.99, descricaoPreco: "À vista no PIX", imagem: "/assets/controle.png" },
  { id: 6, descricao: "Smartphone Asus", preco: 3399.99, descricaoPreco: "À vista no PIX", imagem: "/assets/celular-gamer.png" },
  { id: 7, descricao: "Iphone 15", preco: 5499.99, descricaoPreco: "À vista no PIX", imagem: "/assets/iphone.jpeg" },
  { id: 8, descricao: "Macbook 2023", preco: 8449.99, descricaoPreco: "À vista no PIX", imagem: "/assets/macbook.jpeg" },
  { id: 9, descricao: "Mesa Gamer", preco: 1000, descricaoPreco: "À vista no PIX", imagem: "/assets/mesa-gamer.png" },
  { id: 10, descricao: "Mouse Logitech Wireless", preco: 750, descricaoPreco: "À vista no PIX", imagem: "/assets/mouse-2.jpg" },
  { id: 11, descricao: "Notebook Lenovo", preco: 4500, descricaoPreco: "À vista no PIX", imagem: "/assets/notebook1.png" },
  { id: 12, descricao: "Notebook Samsung", preco: 2050.30, descricaoPreco: "À vista no PIX", imagem: "/assets/notebook2.png" },
  { id: 13, descricao: "Notebook Acer", preco: 3990.90, descricaoPreco: "À vista no PIX", imagem: "/assets/note-gamer.png" },
  { id: 14, descricao: "Notebook Gamer Samsung", preco: 4990, descricaoPreco: "À vista no PIX", imagem: "/assets/note-gamer2.png" },
  { id: 15, descricao: "Caixa de Som JBL", preco: 859.99, descricaoPreco: "À vista no PIX", imagem: "/assets/som.png" },
]
