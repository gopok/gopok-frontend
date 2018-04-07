<template>
  <v-card class="my-1">
    <v-card-title>
      <v-chip dark text-color="grey" hover>
        <div>
        <v-avatar class="grey">
        </v-avatar>
        {{posts[i%posts.length].username}}
        </div>
      </v-chip>
      {{posts[i%posts.length].content}}
    </v-card-title>
    <v-card-actions>
      <v-btn flat color="accent">Share</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Post',
  props: ['i'],
  data () {
    return {
      // test posts from wypok, later they will be downloaded through the API
      posts: [
        {
          username: 'Szczery_czlowiek',
          content:
            'Ej, czemu w Polsce mamy czas 24 godzinny? Przecież 12 godzinny wygląda lepiej na zegarze i jest czytelniejszy. \nZamiast używać oznaczeń AM-PM można by używać R/RA (rano) P/PP (po południu)\nPrzecież godzina 16:52 wygląda gorzej niż 4:52 P lub 4:52 PP\nCo o tym sądzicie? Ja osobiście wszędzie gdzie się da używam czasu 12 godzinnego.'
        },
        {
          username: 'kkwoj',
          content:
            'Wiecie co jest spoko? Że właśnie koło mnie w autobusie siedzi Pan, którego kojarzę jak jeszcze był takim strasznym żulikiem, a teraz jest w zupełnie innym miejscu w życiu, ogarnięty, czysty, zadowolony wraca z pracy. Super widzieć, że komuś się udało i jednak wygrał ze sobą i z innymi przeciwnościami (｡◕‿‿◕｡) '
        },
        {
          username: 'Wodolanka',
          content:
            'Ostatnio na takiej wsi cztery domy na krzyż wpadła nam mucha do samochodu, przejechała jakieś 120 km i wyleciała koło starówki w Olsztynie. Ciekawe co sobie pomyślała ta mucha, co nigdy wcześniej nawet chodnika nie widziała...'
        }
      ]
    }
  }
}
</script>
