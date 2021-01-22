BEGIN;

DROP TABLE IF EXISTS return_order CASCADE;

CREATE TABLE return_order (
    id SERIAL PRIMARY KEY,
    order_number INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    reason VARCHAR(20) NOT NULL
);

INSERT INTO return_order (order_number, quantity, reason) VALUES
('1234567', '2', 'fit'),
('1234568', '1', 'dislike');

COMMIT;