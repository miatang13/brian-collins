<template>
<div class = "timelineBlockS">
        <section id = "timelineWrapper">
        <div data-aos="fade-down" data-aos-duration="3000">
            <section> 
                <TimelineBlock :givenContent = "[{ 
                                                company: 'Duffy and Partners',
                                                job: 'Design, Business Development',
                                                year: '1990 – 1992'
                                            }]"
                            :location = "'middle'"
                        />
            </section>
        </div>

        <div data-aos="fade-right" data-aos-duration="3000">
            <section>
                <TimelineBlock :givenContent = "[{ 
                                                company: 'Collins Design',
                                                job: 'Principal',
                                                year: '1992 – 1995'
                                            }]"
                            :location = "'left'"
                        />
            </section>
        </div>

        <div data-aos="fade-left" data-aos-duration="3000">
            <section>
                <TimelineBlock :givenContent = "[{ 
                                            company: 'Foote, Cone & Belding ',
                                            job: 'Creative Director',
                                            year: '1995 – 1998'
                                        }]"
                        :location = "'middle'"
                        />
            </section>
        </div>

        <div data-aos="fade-right" data-aos-duration="3000">
            <section>
                <TimelineBlock :givenContent = "[{ 
                                            company: 'Ogilvy',
                                            job: 'Chief Creative Director',
                                            year: '1998 – 2008'
                                        }]"
                        :location = "'right'"
                        />
            </section> 
        </div>

        <div data-aos="fade-left" data-aos-duration="3000">
            <section>
                <TimelineBlock :givenContent = "[{ 
                                        company: 'School of Visual Arts',
                                        job: 'Professor',
                                        year: '2001 – Present'
                                    }]"
                    :location = "'left'"
                    />
            </section>
        </div>

        <div data-aos = "fade-up" data-aos-duration="3000">
            <section>
                <TimelineBlock :givenContent = "[{ 
                                        company: 'The One Club for Creativity',
                                        job: 'Officer',
                                        year: '2002 – Present'
                                    }]"
                    :location = "'right'"
                    />
            </section>
        </div>

         <div data-aos = "fade-down" data-aos-duration="3000">
            <section>
                <TimelineBlock :givenContent = "[{ 
                                        company: 'COLLINS',
                                        job: 'Co-Founder / Chief Creative Officer',
                                        year: '2008 – Present'
                                    }]"
                    :location = "'middle'"
                    />
            </section>
        </div>


    </section>
</div>
</template>

<script>
import TimelineBlock from '@/components/timelineBlock.vue'

export default {
    name: 'TimelineBlockS',
    components:{
        TimelineBlock
    }
}
</script>

<style lang="scss" scoped>

#timelineWrapper {
    padding-top: 200px;
}

@media screen and (max-width: 600px) {

    #timelineWrapper {
        padding-top: 350px;
    }

}
</style>