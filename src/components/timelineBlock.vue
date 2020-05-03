<template>
    <div class = "timelineBlock"  >
         <div :class = "location"> 
            <li v-for = "content in givenContent" :key="content.company"> 
              <h2 id = "singleBlock">  {{ content.company }} <br><br> 
                                       {{ content.job }} <br><br> 
                                       {{ content.year }} </h2>
            </li>
        </div> 
    </div>
</template>

<script>

export default {
    name: "TimelineBlock",
    props: {
        /* get content from computed */
        givenContent: {
            type: Array,
            required: true,
        },
        /* left, middle, right */
        location: {
            required: true
        },
    },
    data () {
        return {
       }
    },
}
</script>

<style lang="scss" scoped>
$max-width: 280px;

.left {
    float: left;
    max-width: $max-width;
}

.middle {
    margin-left: 400px;
    max-width: $max-width;
}

.right {
    margin-left: 700px;
    max-width: $max-width;
}

#singleBlock {
    background: linear-gradient(to right, #FFF 20%, rgb(255, 102, 0) 40%, rgb(0, 255, 136) 60%, #FFF 80%);
    background-size: 200% auto;

    color: #000;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: shine 8s linear forwards;
    @keyframes shine {
        to {
            background-position: 200% center;
        } }


    &:hover {
        background: linear-gradient(to right, #FFF 20%, rgb(255, 102, 0) 40%, rgb(0, 255, 136) 60%, #FFF 80%);
        background-size: 200% auto;
        
        color: #000;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        
        animation: shine 2s linear infinite;
        @keyframes shine {
            to {
                background-position: 200% center;
            } }
    }
}


</style>