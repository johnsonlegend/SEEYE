package com.example.johson.seeye;

import android.content.Context;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.ImageButton;

public class MenuActivity extends AppCompatActivity {

    ImageButton chairButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_menu);
        addListernerOnButton();
    }

    public void addListernerOnButton() {
        chairButton = (ImageButton) findViewById(R.id.imageButton1);

        chairButton.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {

                Intent i = new Intent(getApplicationContext(), ChairActivity.class);
                startActivity(i);
            }
        });

//        button.setOnClickListerner(new OnClickListener() {
//
//            @Override
//            public void onClick() {
//                Intent intent = new Intent(context, ChairActivity.class);
//                startActivities(intent);
//            }
//        })
    }
}
