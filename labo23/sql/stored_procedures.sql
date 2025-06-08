-- 1. Insertar un nuevo valor
DELIMITER //
CREATE PROCEDURE InsertarDato(IN p_valor VARCHAR(255))
BEGIN
    INSERT INTO datos(valor) VALUES(p_valor);
END;
//
DELIMITER ;

-- 2. Obtener todos los registros
DELIMITER //
CREATE PROCEDURE ObtenerTodosLosDatos()
BEGIN
    SELECT * FROM datos;
END;
//
DELIMITER ;

-- 3. Borrar un registro por ID
DELIMITER //
CREATE PROCEDURE BorrarDatoPorID(IN p_id INT)
BEGIN
    DELETE FROM datos WHERE id = p_id;
END;
//
DELIMITER ;

-- ========================================
-- Pregunta: ¿Qué desventajas identificas en la utilización de stored procedures?
-- ========================================
-- La depuración de stored procedures puede ser limitada y menos amigable en comparación con otros entornos de desarrollo.
-- Los stored procedures pueden ser específicos y únicos del sistema de base de datos lo que complica una migración fácil.
-- Es más difícil mantener versiones de stored procedures que del código fuente tradicional.