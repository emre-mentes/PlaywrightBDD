Feature: Sauce Demo Login

  Scenario: Gecerli kullanici girisi
    Given kullanici login sayfasindadir
    When kullanici adi "standard_user" girer
    And sifre "secret_sauce" girer
    And login butonuna tiklar
    Then urunler sayfasi acilmalidir