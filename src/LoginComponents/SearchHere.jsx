import React, { useState } from 'react';
import style from '../CSS/Home.module.css';
import SearchNav from '../SharedComponents/SearchNav'
import { Card, Col, Container, Row } from 'react-bootstrap';
import Style from '../CSS/LoginHome.module.css'
const SearchHere = ({ items }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filtered = items.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <div style={{ backgroundColor: '#121212' }}>
      {/* Search Bar */}
      <div>
      <SearchNav val={searchQuery} se={handleSearch} />
      </div>
      <Container className={`mt-5 ms-5 `}>
        <h4>Browse All</h4>
      </Container>
      <Container>
        <Row xs={1} md={2} lg={6} xl={6} className="mt-4 p-2">
          {/* Render filtered playlist items */}
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <Col key={index} className='ms-4'>

               <div className={`mb-4 ${Style.searcdiv}`} style={{background:item.color,height:'8rem'}}>
               <span className={`${Style.searchspan}`}>{item.title}</span>
                  <img src={item.img_src} className={`${Style.searchimg}`} alt="" />
                
               </div>
              </Col>
            ))
          ) : (
            <h2>Not found</h2>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default SearchHere;
