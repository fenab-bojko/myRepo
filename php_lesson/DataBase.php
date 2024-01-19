<?

define('DB_PERSISTENCY', 'true');
define('DB_SERVER', '');
define('DB_USERNAME', '');
define('DB_PASSWORD', '');
define('DB_DATABASE', '');
define('PDO_DSN', 'pgsql:host=' . DB_SERVER . ';dbname=' . DB_DATABASE);


class DataBase
{

    private static $db;

    // Clear the PDO class instance
    public static function Close()
    {
        self::$db = null;
    }

    protected function createTable(PDO $db)
    {

        $db->exec('
		CREATE TABLE IF NOT EXISTS Options (
			oid INT(4) auto_increment PRIMARY KEY,
			name TEXT,
			value TEXT,
			section TEXT
		)');

	    $db->exec('
	    CREATE TABLE IF NOT EXISTS Users (
			uid INT(4) auto_increment PRIMARY KEY,
			surname VARCHAR(40),
			name VARCHAR(40),
			patro VARCHAR(40),
			phone VARCHAR(40),
			mail VARCHAR(40),
			edu TEXT,
			block INT(4) REFERENCES Blocks(bid),
            status VARCHAR(40),
			reg_date DATE,
			type INT(2),
			format INT(2),
			anketa TEXT,
			comment TEXT,
			archive INT(1),
			id_ticket BIGINT(11)
        )');

        $db->exec('
	    CREATE TABLE IF NOT EXISTS user_fields (
			id INT(4) auto_increment PRIMARY KEY,
			title VARCHAR(40),
			field VARCHAR(40),
			sort INT(3)
        )');


        $db->exec('
		CREATE TABLE IF NOT EXISTS Blocks (
			bid INT(4) auto_increment PRIMARY KEY,
			course INT(4) REFERENCES Courses(cid),
			title TEXT,
			start DATE,
			finish DATE,
			confirm DATE,
			shedule TEXT,
			msg1 TEXT,
			msg2 TEXT,
            msg3 TEXT,
			msg4 TEXT,
			active INT(1),
			archive INT(1)
		)');

        $db->exec('
		CREATE TABLE IF NOT EXISTS Courses (
			cid INT(4) auto_increment PRIMARY KEY,
			title TEXT,
			date DATE,
			duration TEXT,
			price TEXT,
			descr TEXT,
			photo TEXT,
			photo_hover TEXT,
			reg_status INT(1),
			site_status INT(1),
			sort INT(3),
			url TEXT,
		    caption TEXT,
		    formats TEXT
		)');

        $db->exec('
        CREATE TABLE IF NOT EXISTS Roles (
            rid INT(4) auto_increment PRIMARY KEY,
            role TEXT,
            sections TEXT,
            name VARCHAR (255)
        )');

        $db->exec("
        CREATE TABLE IF NOT EXISTS users_admin (
            uid INT(4) auto_increment PRIMARY KEY,
            login VARCHAR (255),
            password VARCHAR (255),
            name VARCHAR (255),
            role INT(4) REFERENCES Roles (rid),
            create_date DATE
        )");

	    $db->exec('
		CREATE TABLE IF NOT EXISTS Pages (
			pid INT(8) auto_increment PRIMARY KEY,
			course INT(4),
			title TEXT,
			status VARCHAR (20),
			type VARCHAR (40),
			template VARCHAR (40),
			data TEXT
		)');

        $db->exec("
        CREATE TABLE IF NOT EXISTS payment_docs (
            id INT(4) auto_increment PRIMARY KEY,
            block_id INT(4) REFERENCES Blocks(bid),
            create_date DATE,
            archive INT(1)
        )");

        $db->exec("
        CREATE TABLE IF NOT EXISTS payment_periods (
            id INT(4) auto_increment PRIMARY KEY,
            payment_doc_id INT(4) REFERENCES payment_docs(id),
            date DATE,
            summ INT(6),
            archive INT(1)
        )");

        $db->exec("
        CREATE TABLE IF NOT EXISTS payments (
            id INT(4) auto_increment PRIMARY KEY,
            user_id INT(6) REFERENCES Users(uid),
            period_id INT(4) REFERENCES payment_periods(id),
            summ INT(6),
            date_pay DATE,
            email_notify INT(2) DEFAULT 0,
            sms_notify INT(2) DEFAULT 0,
            file VARCHAR(255),
            blocked INT(1),
            archive INT(1)
        )");
    }


    public function openDataBase()
    {
        if (!isset(self::$db)) {
            // Execute code catching potential exceptions
            try {
                $options = array(PDO::ATTR_PERSISTENT => DB_PERSISTENCY, PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES UTF8');
                self::$db = new PDO(PDO_DSN, DB_USERNAME, DB_PASSWORD, $options);
                self::$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                // $this->createTable(self::$db);

            } catch (PDOException $e) {
                // Close the database handler and trigger an error
                self::Close();
                trigger_error($e->getMessage(), E_USER_ERROR);
            }
        }
        return self::$db;
    }

    public function lastInsertId(){
	    $db = $this->openDataBase();
	    return $db->lastInsertId();
    }

    public function setDataBase($string)
    {
        $db = $this->openDataBase();
        $db->exec($string);
    }

    public function setBasePrepare($query, $data)
    {
        $db = $this->openDataBase();
        $stmt = $db->prepare($query);
        $stmt->execute($data);
    }

    public function getDataBase($string)
    {
        $db = $this->openDataBase();
        $query = $db->query($string);
        if ($query) {
            return $query->fetchAll(PDO::FETCH_ASSOC);
        } else {
            return false;
        }
    }
    
    public function rowCount($query, $data)
    {
        $db = $this->openDataBase();
        $stmt = $db->prepare($query);
        $stmt->execute($data);
        return $stmt->rowCount();
    } 
    
    public function getBasePrepare($query, $data)
    {
        $db = $this->openDataBase();
        $stmt = $db->prepare($query);
        $stmt->execute($data);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }


}