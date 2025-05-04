import math

def menu():
    print("\n=== KALKULATOR RUMUS ===")
    print("1. Luas Persegi")
    print("2. Luas Lingkaran")
    print("3. Volume Kubus")
    print("4. Teorema Pythagoras")
    print("5. Konversi Celsius ke Fahrenheit")
    print("6. Keluar")
    pilihan = input("Pilih rumus (1-6): ")
    return pilihan

def hitung_luas_persegi():
    sisi = float(input("Masukkan panjang sisi: "))
    return sisi * sisi

def hitung_luas_lingkaran():
    jari_jari = float(input("Masukkan jari-jari: "))
    return math.pi * (jari_jari ** 2)

def hitung_volume_kubus():
    sisi = float(input("Masukkan panjang sisi: "))
    return sisi ** 3

def hitung_pythagoras():
    a = float(input("Masukkan sisi A: "))
    b = float(input("Masukkan sisi B: "))
    return math.sqrt(a**2 + b**2)

def konversi_celsius_ke_fahrenheit():
    celsius = float(input("Masukkan suhu (°C): "))
    return (celsius * 9/5) + 32

# Program Utama
print("Selamat datang di Kalkulator Rumus!")
while True:
    pilihan = menu()
    
    if pilihan == "1":
        print(f"Luas Persegi = {hitung_luas_persegi()}")
    elif pilihan == "2":
        print(f"Luas Lingkaran = {hitung_luas_lingkaran():.2f}")
    elif pilihan == "3":
        print(f"Volume Kubus = {hitung_volume_kubus()}")
    elif pilihan == "4":
        print(f"Sisi Miring (C) = {hitung_pythagoras():.2f}")
    elif pilihan == "5":
        print(f"Suhu dalam Fahrenheit = {konversi_celsius_ke_fahrenheit():.1f}°F")
    elif pilihan == "6":
        print("Terima kasih! Sampai jumpa.")
        break
    else:
        print("Pilihan tidak valid. Silakan coba lagi.")