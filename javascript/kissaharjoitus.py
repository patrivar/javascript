class Kissa:
    def __init__ (self, nimi):
        self.nimi = nimi

class Hoitola:
    def __init__ (self, nimi):
        self.nimi = nimi
        hoidossa = []

kissa = Kissa("Tiku")
def metodi(kissa):
    print(f"Kissan nimi on {kissa.nimi}.")

metodi(kissa)
hoitola = Hoitola("Kisula")
def hoitoon():
    Hoitola.append(kissa)
    print(f"{Hoitola.nimi}ssa on tällä hetkellä vain yksi kissa, {kissa.nimi}.")

hoitoon()

class Työntekijä:
    def __init__ (self,nimi):
        self.nimi = nimi

class Kuukausipalkkalainen:
    def __init__ (self, nimi, palkka):
        self.palka = palkka
        super().__init__(nimi)
