<template>
    <div class="">
        <h3 class="p-5 text-center">J.O MAGOLO &amp; Co. Advocates approach to legal representation</h3>
        <ul>
            <li 
            v-for="(event, index) in events" :key="index"
            :style="{ '--accent-color': getAccentColor(index) }">
                <div class="date">{{ index + 1}}. {{ event.title }}</div>
                <div class="title">{{ event.title }}</div>
                <div class="descr">{{ event.body }}</div>
            </li>

        </ul>
<!-- <div class="credits"><a target="_blank" href="https://www.freepik.com/free-vector/infographic-template-with-yearly-info_1252895.htm">inspired by</a></div> -->
    </div>
</template>

<script setup>
import { ref } from "vue";

const events = ref([
    {'title':'Initial Consultation & Information Gathering',
    'body': ' Commencing with a complimentary consultation, we address your legal matters and consider all viable options. We ascertain crucial details and evaluate the prospect of a successful resolution outside of litigation. A tailored strategy is developed in collaboration with you, taking into account your unique objectives and aspirations.'
    },
    {'title':'Collaborative Resolution & Negotiation',
    'body': ' We advocate for alternative dispute resolution (ADR) methods such as mediation and arbitration, leveraging our proficiency to guide you through these processes. We negotiate on your behalf with the intent of achieving a fair and efficient outcome, diverting the need for expensive litigation.'
    },
    {'title':'Legal Action:Legal Action',
    'body': 'In the event that a resolution cannot be attained through ADR, we meticulously prepare your case for court. Our seasoned litigators vigorously represent you in court if necessary, however, litigation remains a last resort after exhausting all other options.'
    },
    {'title':'Post-Case Support',
    'body': 'We ensure you are kept informed throughout the entire process and fully understand the final outcome of your case. We remain available to address any potential questions or concerns, maintaining our commitment even after the case has concluded.'
    }
]);
const getAccentColor = (index) => {
      return index % 2 === 0 ? 'var(--blue)' : 'var(--gold)';
    };
</script>
<style scoped>

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


h1 {
  text-align: center;
}

ul {
  --col-gap: 2rem;
  --row-gap: 2rem;
  --line-w: 0.25rem;
  display: grid;
  grid-template-columns: var(--line-w) 1fr;
  grid-auto-columns: max-content;
  column-gap: var(--col-gap);
  list-style: none;
  width: min(60rem, 90%);
  margin-inline: auto;
}

/* line */
ul::before {
  content: "";
  grid-column: 1;
  grid-row: 1 / span 20;
  background: rgb(225, 225, 225);
  border-radius: calc(var(--line-w) / 2);
}

/* columns*/

/* row gaps */
ul li:not(:last-child) {
  margin-bottom: var(--row-gap);
}

/* card */
ul li {
  grid-column: 2;
  --inlineP: 1.5rem;
  margin-inline: var(--inlineP);
  grid-row: span 2;
  display: grid;
  grid-template-rows: min-content min-content min-content;
}

/* date */
ul li .date {
  --dateH: 3rem;
  height: var(--dateH);
  margin-inline: calc(var(--inlineP) * -1);

  text-align: center;
  background-color: var(--accent-color);

  color: var(--orange);
  font-size: 1.25rem;
  font-weight: 700;

  display: grid;
  place-content: center;
  position: relative;

  border-radius: calc(var(--dateH) / 2) 0 0 calc(var(--dateH) / 2);
}

/* date flap */
ul li .date::before {
  content: "";
  width: var(--inlineP);
  aspect-ratio: 1;
  background: var(--accent-color);
  background-image: linear-gradient(rgba(0, 0, 0, 0.2) 100%, transparent);
  position: absolute;
  top: 100%;

  clip-path: polygon(0 0, 100% 0, 0 100%);
  right: 0;
}

/* circle */
ul li .date::after {
  content: "";
  position: absolute;
  width: 2rem;
  aspect-ratio: 1;
  background: var(--bgColor);
  border: 0.3rem solid var(--accent-color);
  border-radius: 50%;
  top: 50%;

  transform: translate(50%, -50%);
  right: calc(100% + var(--col-gap) + var(--line-w) / 2);
}

/* title descr */
ul li .title,
ul li .descr {
  background: var(--bgColor);
  position: relative;
  padding-inline: 1.5rem;
}
ul li .title {
  overflow: hidden;
  padding-block-start: 1.5rem;
  padding-block-end: 1rem;
  font-weight: 500;
}
ul li .descr {
  padding-block-end: 1.5rem;
  font-weight: 300;
}

/* shadows */
ul li .title::before,
ul li .descr::before {
  content: "";
  position: absolute;
  width: 90%;
  height: 0.5rem;
  background: rgba(0, 0, 0, 0.5);
  left: 50%;
  border-radius: 50%;
  filter: blur(4px);
  transform: translate(-50%, 50%);
}
ul li .title::before {
  bottom: calc(100% + 0.125rem);
}

ul li .descr::before {
  z-index: -1;
  bottom: 0.25rem;
}

@media (min-width: 40rem) {
  ul {
    grid-template-columns: 1fr var(--line-w) 1fr;
  }
  ul::before {
    grid-column: 2;
  }
  ul li:nth-child(odd) {
    grid-column: 1;
  }
  ul li:nth-child(even) {
    grid-column: 3;
  }

  /* start second card */
  ul li:nth-child(2) {
    grid-row: 2/4;
  }

  ul li:nth-child(odd) .date::before {
    clip-path: polygon(0 0, 100% 0, 100% 100%);
    left: 0;
  }

  ul li:nth-child(odd) .date::after {
    transform: translate(-50%, -50%);
    left: calc(100% + var(--col-gap) + var(--line-w) / 2);
  }
  ul li:nth-child(odd) .date {
    border-radius: 0 calc(var(--dateH) / 2) calc(var(--dateH) / 2) 0;
  }
}

</style>
