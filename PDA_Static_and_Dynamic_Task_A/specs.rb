require ('minitest/autorun')
require ('minitest/rg')
require_relative ('./card.rb')
require_relative ('./testing_task_2.rb')
require ('pry')

class TestCard < MiniTest::Test

  def setup()
    @cardgame = CardGame.new (@cards)
    @card1 = Card.new("heart", 1)
    @card2 = Card.new("diamond", 4)
    @card3 = Card.new("spade", 6)
    @card4 = Card.new("club", 9)
    @cards = [@card1, @card2, @card3, @card4]
  end

  def test_check_for_ace__true()
    assert_equal(true, @cardgame.check_for_ace(@card1))
  end

  def test_check_for_ace__false()
    assert_equal(false, @cardgame.check_for_ace(@card2))
  end

  def test_highest_card()
    card1 = @card1.value
    card2 = @card2.value
    assert_equal(4, @cardgame.highest_card(@card1, @card2))
  end

  def test_cards_total()
    result = CardGame.cards_total(@cards)
    assert_equal(20, result)
  end


end
