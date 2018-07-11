

################################################################################
  @author: mali.sahin
  @since: 11.07.2018
################################################################################

img dizini altındaki image'ler müşteriye bağlı olarak değişkenlik gösterir.
Müşteri organizasyonu da image adının öncesine konarak çağırılır.

Herhangi bir image eklenecek ise image adından önce hangi müşteriye bağlı olduğu müşteri organizasyon adı ile belirtilmelidir.

Örnek: ECA müşterisi için bir login-background.jpg dosyasını ekleyeceğiz.
Dizin altına 'ECA' + '_' + 'login-background.jpg' şeklinde aranacaktır.


 "../assets/img/" + orgKod + "_login-background.jpg"

