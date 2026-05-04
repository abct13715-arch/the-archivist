UPDATE listings SET rating = (RANDOM() * 5)::numeric(10,1);
