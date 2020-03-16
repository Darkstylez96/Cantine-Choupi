import React, { Component } from 'react';
export default class Products extends Component {

    render() {


        return (
            <div className="row">
                <div className="col-md-4">
                    {`${this.props.count} products found.`}
                </div>
                <div className="col-md-4">
                    <label>Order by
               <select className="form-control" value={this.props.sort} onChange={this.props.handleSortChange}>
                            <option value="">Select</option>
                            <option value="lowestprice">Lowest to highest</option>
                            <option value="highestprice">Highest to lowest</option>
                        </select>
                    </label>
                </div>
                <div className="col-md-4">
                    <label> Categorie
               <select className="form-control" value={this.props.categorie} onChange={this.props.handleCategorieChange}>
                            <option value="">ALL</option>
                            <option value="Pizza">Pizza</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Desserts">Desserts</option>
                            <option value="Dranken">Dranken</option>
                            <option value="Antipasti">Antipasti</option>
                            <option value="Kwaliteits wijnen">Kwaliteits wijnen</option>
                            <option value="Italiaanse wijnen">Italiaanse wijnen</option>
                            <option value="Aperatieven/ likeuren">Aperatieven/ likeuren</option>
                            <option value="Bieren">Bieren</option>
                            <option value="Overige dranken">Overige dranken</option>
                            <option value="Pane e olive (Brood en olijven)">Pane e olive (Brood en olijven)</option>
                            <option value="Zuppe">Zuppe</option>
                            <option value="Fredi (Koude voorgerechten)">Fredi (Koude voorgerechten)</option>
                            <option value="Caldi (Warme voorgerechten)">Caldi (Warme voorgerechten)</option>
                            <option value="Insalata">Insalata</option>
                            <option value="Bijgerechten">Bijgerechten</option>
                        </select>
                    </label>
                </div>
            </div>
        )
    }
}
