<template>
    <div>
        <div class="slider" id="slider">
            <home-form-vaquinha />
        </div>
        <div style="margin-top: 20px; line-height: 1.5rem; box-sizing: border-box;">
            <h2 class="heading-background">vaquinhas que mais arrecadaram</h2>
            <h1 class="home-h1">na semana</h1>
        </div>
        <div style="margin-top: 10px; display: flex; flex-wrap: wrap; justify-content: center;">         
             <div style="width: 70%;">
                <div style="display: flex; flex-wrap: wrap; text-align: center; justify-content: center;">
                    <card-vaquinha style="width: 28%; margin: 20px;" :key="n" :numero="n" v-for="n in numerosArray"/>
                </div>
            </div>            
        </div>
    </div>    
</template>
<script>
import HomeFormVaquinha from '../../components/main/HomeFormVaquinha';
import CardVaquinha from '../../components/main/CardVaquinha';

export default ({
    name: 'Home',
    components: { HomeFormVaquinha, CardVaquinha },
    data() {
        return {
            numerosArray: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        }        
    }
})
</script>

<style>
.heading-background {
    margin-bottom: -70px;
    font-weight: 300;
    color: #D8EAF2;
    font-size: 3rem;
    letter-spacing: -0.04em;
    line-height: 1em;
    text-align: center;
    box-sizing: border-box;
}

.home-h1 {
    text-align: center;
    font-size: 3.5rem;
    color: #003853;
    letter-spacing: -0.04em;
    font-weight: 700;
    line-height: 1em;
    box-sizing: border-box;
    margin-top: 38px;
    margin-bottom: 38px;
}
</style>
