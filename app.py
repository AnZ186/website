from flask import Flask, render_template, request, jsonify

# Create a Flask app
app = Flask(__name__)

# Define a route
@app.route('/')
def home():
    return render_template('index.html')

# About Route
@app.route('/about')
def about():
    return render_template('About.html')

# Selamat Route
@app.route('/selamat/<nama>')
def selamat(nama):
    return render_template('selamat.html', nama=nama)

# Error handling
@app.errorhandler(404)
def page_not_found(e):
    return render_template('Error.html'), 404

#lucu Route
@app.route('/lucu')
def lucu():
    return render_template('lucu.html')

#hbd Route
@app.route("/hbd", methods=['GET', 'POST'])
def happybirthday():
    name = "Teman"
    if request.method == 'POST':
        name = request.form.get('name', 'Teman')
    return render_template('hbd.html', name=name)

# Kalkulator Route
@app.route("/kalkulator")
def redirect_to_kalkulator():
    return render_template('kalkulator.html')

# Kalkulator API Route
@app.route("/calculate", methods=["POST"])
def calculate():
    data = request.get_json()
    rumus = data["rumus"]
    nilai = data["nilai"]
    
    try:
        if rumus == "lingkaran":
            hasil = 3.14 * (float(nilai["radius"]) ** 2)
        elif rumus == "segitiga":
            hasil = 0.5 * float(nilai["alas"]) * float(nilai["tinggi"])
        elif rumus == "persegi":
            hasil = float(nilai["sisi"]) ** 2
        else:
            hasil = "Rumus tidak valid"
        
        return jsonify({"hasil": hasil})
    except Exception as e:
        return jsonify({"error": str(e)})

# Test Route
@app.route('/test')
def test():
    return render_template('test.html')

# Run the app
if __name__ == '__main__':
    app.run(debug=True)