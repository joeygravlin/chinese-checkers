<template>
  <div  class="square"
        v-bind:class="[ square.color == 'white' ? 'white' : 'black',
                        square.value == 'w' ? 'hasWhitePiece' : square.value == 'b' ? 'hasBlackPiece' : '',
                        square.isKing ? 'isKing' : '',
                        square.isValidMove ? 'isValidMove' : '',
                        square.isSelected ? 'isSelected' : '' ]"
        v-on:click="selectSquare"
        >
          <p v-text="square.isKing ? '♔' : ''"></p>
  </div>
</template>

<script>
  // import Square from 'Square.js'

  export default {
    name: 'square',

    props: [
      'initialSquare'
    ],

    data () {
      return {
        square: this.initialSquare
      }
    },

    methods: {
      // TODO
      selectSquare () {
        this.$emit('select-square', this.square)
      }
    },

    mounted () {
      // console.log(this.square)
    }
  }
</script>

<style lang="sass" scoped>

  .square
      height: 60px
      width: 60px
      position: relative
      display: flex;
      align-items: center;
      justify-content: center

      p
        margin: 0
        font-size: 2em
        z-index: 999

      &.white
          background: #ffffff

          &.hasWhitePiece
              &:before
                  content: ''
                  border: 1px solid #000000
                  width: 40px
                  height: 40px
                  position: absolute
                  border-radius: 21px
                  top: 9px
                  left: 9px
                  background-color: #ffffff
                  box-shadow: 2px 2px 2px #000000
                  cursor: pointer

          &.hasBlackPiece
              color: white

              &:before
                  content: ''
                  border: 1px solid #000000
                  width: 40px
                  height: 40px
                  position: absolute
                  border-radius: 21px
                  top: 9px
                  left: 9px
                  background-color: #000000
                  box-shadow: 2px 2px 2px #000000
                  cursor: pointer

      &.black
          background: #000000

      &.isKing
        p
            user-select: none
            cursor: pointer

      &.isValidMove
        background-color: #8BC34A
        cursor: pointer

      &.isSelected
        background-color: #8BC34A

</style>
