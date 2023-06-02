import * as connection from '../config/database.js'
export async function getAllProducts(){
    const [rows] = await connection.pool.query('SELECT name,price,tags FROM Product')
    console.log(rows);
    return rows;
};
export async function getProductCategoryWise(category){
    const query = 'SELECT * FROM Product JOIN Category ON Product.category_id = Category.category_id WHERE Category.name LIKE ?';
    const values = [`%${category}%`];
    const [rows] = await connection.pool.query(query,values);
    console.log(rows);
    return rows;
}
export async function getProduct(productName){
    const query = 'SELECT * FROM Product WHERE name LIKE ?';
    const values = [`%${productName}%`];
    const [rows] = await connection.pool.query(query,values);
    console.log(rows);
    return rows;
}
export 