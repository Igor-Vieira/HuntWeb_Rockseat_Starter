import React, { Component } from 'react'
import api from '../../services/api'
import {Link} from 'react-router-dom'

import './TechStyles.css'

export default class Tech extends Component {
    state = {
        products: [],
        productInfo: {},
        page: 1,
    }

    componentDidMount() {
        this.loadTech()
    }

    loadTech = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`)

        const { docs, ...productInfo } = response.data

        this.setState({ products: docs, productInfo, page })
    }

    prevPage = () => {
        const { page } = this.state

        if (page === 1) return

        const pageNumber = page - 1

        this.loadTech(pageNumber)
    }

    nextPage = () => {
        const { page, productInfo } = this.state

        if (page === productInfo.pages) return

        const pageNumber = page + 1

        this.loadTech(pageNumber)
    }

    render () {
        const { products, page, productInfo } = this.state

        return (
            <>
                <div className='techBodie'>
                    {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <Link to={`/products/${product._id}`}>Acessar</Link>
                    </article>
                    ))}
                </div>
                <div className='actions'>
                    <div disabled={page === 1} className='actButton' onClick={this.prevPage}>Anterior</div>
                    <div disabled={page === productInfo.pages} className='actButton' onClick={this.nextPage}>Próximo</div>
                </div>
            </>
        )
    }
}