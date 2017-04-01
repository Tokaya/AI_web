from routes import *

main = Blueprint('home', __name__)


@main.route('/')
def index():
    return render_template('index.html')


@main.route('/member')
def member():
    return render_template('member.html')


@main.route('/contact')
def contact():
    return render_template('contact.html')


@main.route('/product')
def product():
    return render_template('product.html')