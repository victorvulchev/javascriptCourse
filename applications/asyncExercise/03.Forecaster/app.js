function attachEvents() {
    document.getElementById("submit").addEventListener("click", getWeather);
    const forecastSectionRef = document.getElementById("forecast");
    const currentRef = document.getElementById("current");
    const upcomingRef = document.getElementById("upcoming");
    const locationInputRef = document.getElementById("location");
    const baseLocationURL = `http://localhost:3030/jsonstore/forecaster/locations`;
    const todayURL = `http://localhost:3030/jsonstore/forecaster/today/`;
    const upcomingURL = `http://localhost:3030/jsonstore/forecaster/upcoming/`;
    const symbols ={
        "Sunny":"&#x2600",
        "Partly sunny":"&#x26C5",
        "Overcast": "&#x2601",
        "Rain": "&#x2614",
        "Degrees": "&#176"
    }

    async function getWeather(ev){
        try{
            const userLocationInput = locationInputRef.value;
            forecastSectionRef.style.display = "block";
            const locationResponse = await fetch(baseLocationURL);
            const locationData = await locationResponse.json();
            const currentLocationData = locationData.find(x => x.name === userLocationInput);
            await fillTodayData(currentLocationData.code)

            await fillUpcomingData(currentLocationData.code);
        }catch(err){
            forecastSectionRef.textContent = "Error";
        }
        
    }

    async function fillTodayData(code){
        const response = await fetch(todayURL + code);
        const data = await response.json();
        const todayInfo = createForecastTodaySection(data);
        currentRef.appendChild(todayInfo);

    }

    async function fillUpcomingData(code){
        const response = await fetch(upcomingURL + code);
        const data = await response.json();
        const upcomingInfo = createForecastUpcomingSection(data);
        upcomingRef.appendChild(upcomingInfo);

    }

    function createForecastUpcomingSection(data){
        const container = document.createElement("div");
        container.classList.add("forecast-info");
        const upcoming1 = generateUpcomingSpan("upcoming", data.forecast[0]);
        const upcoming2 = generateUpcomingSpan("upcoming", data.forecast[1]);
        const upcoming3 = generateUpcomingSpan("upcoming", data.forecast[2]);

        container.appendChild(upcoming1);
        container.appendChild(upcoming2);
        container.appendChild(upcoming3);

        return container
    }

    function generateSpan(classes, name, data){
        const spanContainer = document.createElement("span");
        spanContainer.classList.add(classes);
        const spanName = document.createElement("span");
        spanName.classList.add("forecast-data");
        spanName.textContent = name;
        const spanDegree = document.createElement("span");
        spanDegree.classList.add("forecast-data");
        spanDegree.innerHTML = `${data.low}${symbols.Degrees}/${data.high}${symbols.Degrees}`;
        const spanWed = document.createElement("span");
        spanWed.classList.add("forecast-data");
        spanWed.textContent = data.condition;
        spanContainer.appendChild(spanName);
        spanContainer.appendChild(spanDegree);
        spanContainer.appendChild(spanWed);
        return spanContainer;
    }
    function generateUpcomingSpan(classes, data){
        const spanContainer = document.createElement("span");
        spanContainer.classList.add(classes);
        const spanName = document.createElement("span");
        spanName.classList.add("symbol");
        spanName.innerHTML = findSymbol(data.condition);
        const spanDegree = document.createElement("span");
        spanDegree.classList.add("forecast-data");
        spanDegree.innerHTML = `${data.low}${symbols.Degrees}/${data.high}${symbols.Degrees}`;
        const spanWed = document.createElement("span");
        spanWed.classList.add("forecast-data");
        spanWed.textContent = data.condition;
        spanContainer.appendChild(spanName);
        spanContainer.appendChild(spanDegree);
        spanContainer.appendChild(spanWed);
        return spanContainer;
    }

    function createForecastTodaySection(data){
        const container = document.createElement("div");
        container.classList.add("forecasts")
        const conditionSpan = document.createElement("span");
        conditionSpan.classList.add("condition")
        conditionSpan.classList.add("symbol")
        conditionSpan.innerHTML = findSymbol(data.forecast.condition);
        container.appendChild(conditionSpan);
        const spanContainer = generateSpan("condition", data.name, data.forecast)
        container.appendChild(spanContainer);

        return container
    }

    function findSymbol(condition){
        switch(condition){
            case"Sunny": return "&#x2600";
            case"Partly sunny": return "&#x26C5";
            case"Overcast": return "&#x2601";
            case"Rain": return "&#x2614";
            case"Degrees": return "&#176";
        }
    }
}

attachEvents();

