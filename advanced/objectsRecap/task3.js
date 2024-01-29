function task(name, population, treasury){
    let city= {
        name,
        population,
        treasury,
        taxRate : 10,
        collectTaxes(){
            this.treasury += (this.population * this.taxRate);
            this.treasury = Math.floor(this.treasury);
        },
        applyGrowth(perc){
            let actualPercentage = perc / 100;
            this.population += (this.population * actualPercentage);
            this.population = Math.floor(this.population);
        },
        applyRecession(perc){
            let actualPercentage = perc / 100;
            this.treasury -= (this.treasury * actualPercentage);
            this.treasury = Math.floor(this.treasury);
        }
    }
    return city;
    
}