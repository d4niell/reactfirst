import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../src/components/footer/footer'
import { Card, Input } from 'semantic-ui-react'
import Header from '../src/Header'
export default function Posts() {
    const [APIData, setAPIData] = useState([])
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    useEffect(() => {
        axios.get(`https://gis.vantaa.fi/rest/tyopaikat/v1/kaikki`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = APIData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(APIData)
        }
    }

    return (
        <div style={{ padding: 10 }}>
            <Header/>
            <Input icon='search'
                placeholder='Search...'
                onChange={(e) => searchItems(e.target.value)}
            />
            <Card.Group itemsPerRow={1} style={{ marginTop: 1 }} className="JSONdata">
                {searchInput.length > 1 ? (
                    filteredResults.map((item) => {
                        return (
                            <Card>
                                <Card.Content>
                                    <Card.Header>{item.ammattiala}</Card.Header>
                                    <Card.Description>
                                        {item.tyotehtava}
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        )
                    })
                ) : (
                    APIData.map((item) => {
                        return (
                            <Card>
                                <Card.Content>
                                    <Card.Header>{item.ammattiala}</Card.Header>
                                    <Card.Description>
                                        {item.tyotehtava}
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        )
                    })
                )}
            </Card.Group>
            <Footer/>
        </div>
    
    )
}