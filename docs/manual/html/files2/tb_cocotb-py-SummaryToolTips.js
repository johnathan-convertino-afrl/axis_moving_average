﻿NDSummary.OnToolTipsLoaded("File2:tb_cocotb.py",{20:"<div class=\"NDToolTip TInformation LPython\"><div class=\"TTSummary\">Cocotb test bench</div></div>",21:"<div class=\"NDToolTip TInformation LPython\"><div class=\"TTSummary\">Copyright 2024 Jay Convertino</div></div>",23:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype23\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"3\" data-NarrowColumnCount=\"2\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/3\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">async def</span> moving_average(</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">dut</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"3/1/4/3\" style=\"grid-area:1/3/2/4\">)</div></div></div></div><div class=\"TTSummary\">Emulate verilog moving average function for unsigned numbers only, this is a coroutine that runs at the same time as the main.</div></div>",24:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype24\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">def</span> random_bool()</div></div><div class=\"TTSummary\">Return a infinte cycle of random bools</div></div>",25:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype25\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"3\" data-NarrowColumnCount=\"2\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/3\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">def</span> start_clock(</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">dut</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"3/1/4/3\" style=\"grid-area:1/3/2/4\">)</div></div></div></div><div class=\"TTSummary\">Start the simulation clock generator.</div></div>",26:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype26\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"3\" data-NarrowColumnCount=\"2\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/3\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">async def</span> reset_dut(</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">dut</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"3/1/4/3\" style=\"grid-area:1/3/2/4\">)</div></div></div></div><div class=\"TTSummary\">Cocotb coroutine for resets, used with await to make sure system is reset.</div></div>",27:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype27\" class=\"NDPrototype WideForm\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">@cocotb.test()</span></div><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"3\" data-NarrowColumnCount=\"2\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/3\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">async def</span> conversion_test(</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">dut</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"3/1/4/3\" style=\"grid-area:1/3/2/4\">)</div></div></div></div><div class=\"TTSummary\">Coroutine that is identified as a test routine. This routine tests for conversion based on current input to output size conversion.</div></div>",28:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype28\" class=\"NDPrototype WideForm\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">@cocotb.test()</span></div><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"3\" data-NarrowColumnCount=\"2\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/3\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">async def</span> conversion_test_rand_ready(</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">dut</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"3/1/4/3\" style=\"grid-area:1/3/2/4\">)</div></div></div></div><div class=\"TTSummary\">Coroutine that is identified as a test routine. This routine tests for conversion based on current input to output size conversion.</div></div>",29:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype29\" class=\"NDPrototype WideForm\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">@cocotb.test()</span></div><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"3\" data-NarrowColumnCount=\"2\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/3\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">async def</span> in_reset(</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">dut</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"3/1/4/3\" style=\"grid-area:1/3/2/4\">)</div></div></div></div><div class=\"TTSummary\">Coroutine that is identified as a test routine. This routine tests if device stays in unready state when in reset.</div></div>",30:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype30\" class=\"NDPrototype WideForm\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">@cocotb.test()</span></div><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"3\" data-NarrowColumnCount=\"2\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/3\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">async def</span> no_clock(</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">dut</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"3/1/4/3\" style=\"grid-area:1/3/2/4\">)</div></div></div></div><div class=\"TTSummary\">Coroutine that is identified as a test routine. This routine tests if no ready when clock is lost and device is left in reset.</div></div>"});